import { useState, useEffect } from 'react';
import { getEnquiries } from '../services/api';
import { Mail, Phone, Calendar, Tag, MessageSquare, RefreshCw, TrendingUp, Users, Inbox, Clock } from 'lucide-react';

const typeColors = {
  Residential: 'bg-green-100 text-green-800',
  Commercial: 'bg-blue-100 text-blue-800',
  Industrial: 'bg-orange-100 text-orange-800',
  'Agricultural / Water Pump': 'bg-amber-100 text-amber-800',
  'Not sure yet': 'bg-slate-100 text-slate-600',
};

export default function Admin() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');

  const fetchEnquiries = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await getEnquiries();
      setEnquiries(Array.isArray(data) ? data : data.enquiries || []);
    } catch {
      setError('Failed to load enquiries. Make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchEnquiries(); }, []);

  const filtered = enquiries.filter((e) =>
    `${e.name} ${e.email} ${e.phone} ${e.type}`.toLowerCase().includes(search.toLowerCase())
  );

  const stats = [
    { label: 'Total Enquiries', value: enquiries.length, icon: Inbox, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'This Week', value: enquiries.filter(e => {
        const d = new Date(e.createdAt);
        const now = new Date();
        return (now - d) / (1000 * 60 * 60 * 24) <= 7;
      }).length, icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Unique Customers', value: new Set(enquiries.map(e => e.email)).size, icon: Users, color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'Avg. per Day', value: enquiries.length > 0 ? Math.round(enquiries.length / 30) : 0, icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-green-800 text-white py-8 px-6">
        <div className="container-custom flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="font-display text-2xl font-bold">Admin Dashboard</h1>
            <p className="text-green-200/70 text-sm">DRT ENTERPRISE — Enquiry Management</p>
          </div>
          <button
            onClick={fetchEnquiries}
            disabled={loading}
            className="flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>
      </div>

      <div className="container-custom py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map(({ label, value, icon: Icon, color, bg }) => (
            <div key={label} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center flex-shrink-0`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <div>
                <div className="font-display font-bold text-2xl text-slate-800">{value}</div>
                <div className="text-slate-500 text-xs">{label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="mb-5">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, email, phone or type..."
            className="input-field max-w-md"
          />
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-5 py-4 text-sm mb-6">
            {error}
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="text-center py-16 text-slate-400">Loading enquiries...</div>
        )}

        {/* Table */}
        {!loading && !error && (
          <>
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50 border-b border-slate-100">
                    <tr>
                      {['Customer', 'Contact', 'Type', 'Message', 'Date'].map((h) => (
                        <th key={h} className="text-left px-5 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {filtered.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="text-center py-16 text-slate-400">
                          {enquiries.length === 0 ? 'No enquiries yet.' : 'No results match your search.'}
                        </td>
                      </tr>
                    ) : (
                      filtered.map((e) => (
                        <tr key={e._id} className="hover:bg-slate-50/60 transition-colors">
                          <td className="px-5 py-4">
                            <div className="font-semibold text-slate-800">{e.name}</div>
                          </td>
                          <td className="px-5 py-4">
                            <div className="flex items-center gap-1.5 text-slate-600 mb-1">
                              <Mail className="w-3.5 h-3.5 text-slate-400" />
                              <a href={`mailto:${e.email}`} className="hover:text-green-700 transition-colors">{e.email}</a>
                            </div>
                            <div className="flex items-center gap-1.5 text-slate-600">
                              <Phone className="w-3.5 h-3.5 text-slate-400" />
                              <a href={`tel:${e.phone}`} className="hover:text-green-700 transition-colors">{e.phone}</a>
                            </div>
                          </td>
                          <td className="px-5 py-4">
                            <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${typeColors[e.type] || 'bg-slate-100 text-slate-600'}`}>
                              {e.type || '—'}
                            </span>
                          </td>
                          <td className="px-5 py-4 max-w-xs">
                            <p className="text-slate-500 truncate">{e.message || <span className="text-slate-300 italic">No message</span>}</p>
                          </td>
                          <td className="px-5 py-4">
                            <div className="flex items-center gap-1.5 text-slate-500 whitespace-nowrap">
                              <Calendar className="w-3.5 h-3.5" />
                              {e.createdAt ? new Date(e.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : '—'}
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-slate-400 text-xs mt-3 text-right">
              Showing {filtered.length} of {enquiries.length} enquiries
            </p>
          </>
        )}
      </div>
    </div>
  );
}
