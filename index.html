import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Layers, 
  ClipboardCheck, 
  FileBox, 
  Activity, 
  Settings, 
  Bell, 
  Search, 
  User,
  AlertTriangle,
  CheckCircle2,
  Wrench,
  Clock,
  ChevronRight,
  PlaneTakeoff
} from 'lucide-react';

const App = () => {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  // Dữ liệu Mockup để hiển thị Dashboard
  const stats = {
    totalAssets: 45,
    inspectedToday: 12,
    failed: 3,
    maintenance: 2
  };

  const alerts = [
    { id: 1, asset: 'Đường lăn E', issue: 'Mờ vạch sơn tim đường đoạn giữa', time: '08:35 - 14/03', severity: 'high' },
    { id: 2, asset: 'Hệ thống đèn tiếp cận', issue: 'Cháy bóng đèn số 02, 05', time: '18:20 - 13/03', severity: 'high' },
    { id: 3, asset: 'Sân đỗ tàu bay số 1', issue: 'Nứt nhẹ khe co giãn vị trí đỗ số 3', time: '09:15 - 12/03', severity: 'medium' },
  ];

  const recentLogs = [
    { id: 'CCT-001', time: '08:30', date: '14/03/2026', asset: 'Đường cất hạ cánh 01', inspector: 'Nguyễn Văn A', status: 'Đạt' },
    { id: 'CCT-002', time: '08:35', date: '14/03/2026', asset: 'Đường lăn E', inspector: 'Nguyễn Văn A', status: 'Không đạt' },
    { id: 'CCT-003', time: '09:00', date: '14/03/2026', asset: 'Sân đỗ tàu bay số 1', inspector: 'Trần Văn B', status: 'Đạt' },
    { id: 'CCT-004', time: '09:15', date: '14/03/2026', asset: 'Sân đỗ tàu bay số 2', inspector: 'Trần Văn B', status: 'Đạt' },
  ];

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col shadow-2xl z-10 hidden md:flex">
        {/* Logo & Branding */}
        <div className="h-20 flex items-center px-6 border-b border-slate-800 bg-slate-950">
          <PlaneTakeoff className="w-8 h-8 text-blue-500 mr-3" />
          <div>
            <h1 className="text-base font-bold text-white tracking-wide flex items-center">
              TSKB-247 <span className="ml-2 text-[11px] bg-blue-600 text-white px-2 py-0.5 rounded-full font-semibold">KHU BAY</span>
            </h1>
            <p className="text-[10px] text-slate-400 font-medium tracking-wider uppercase mt-0.5">Phòng TC-KH | Cảng HKQT Cần Thơ</p>
          </div>
        </div>

        {/* Menu */}
        <div className="flex-1 py-6 overflow-y-auto">
          <p className="px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Quản lý trung tâm</p>
          <nav className="space-y-1 px-3">
            <MenuButton icon={<LayoutDashboard size={20}/>} label="Trang tổng quan" active={activeMenu === 'dashboard'} onClick={() => setActiveMenu('dashboard')} />
            <MenuButton icon={<Layers size={20}/>} label="Danh mục Tài sản" active={activeMenu === 'assets'} onClick={() => setActiveMenu('assets')} />
            <MenuButton icon={<ClipboardCheck size={20}/>} label="Sổ tay Kiểm tra" active={activeMenu === 'inspection'} onClick={() => setActiveMenu('inspection')} />
            <MenuButton icon={<Activity size={20}/>} label="Hồ sơ Bệnh án" active={activeMenu === 'history'} onClick={() => setActiveMenu('history')} />
            <MenuButton icon={<FileBox size={20}/>} label="Xuất Sổ lưu trữ" active={activeMenu === 'export'} onClick={() => setActiveMenu('export')} />
          </nav>

          <p className="px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 mt-8">Hệ thống</p>
          <nav className="space-y-1 px-3">
            <MenuButton icon={<Settings size={20}/>} label="Cài đặt cấu hình" active={activeMenu === 'settings'} onClick={() => setActiveMenu('settings')} />
          </nav>
        </div>

        {/* User Info */}
        <div className="p-4 border-t border-slate-800 bg-slate-900">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold border-2 border-slate-700">
              A
            </div>
            <div>
              <p className="text-sm font-medium text-white">Nguyễn Văn A</p>
              <p className="text-xs text-slate-400">Trưởng phòng TC-KH</p>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col overflow-hidden">
        
        {/* HEADER */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 shadow-sm z-0">
          <div className="flex items-center bg-slate-100 px-4 py-2 rounded-lg w-96 border border-slate-200 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
            <Search className="w-5 h-5 text-slate-400 mr-2" />
            <input 
              type="text" 
              placeholder="Tra cứu tài sản, lịch sử kiểm tra..." 
              className="bg-transparent border-none outline-none text-sm w-full text-slate-700 placeholder-slate-400"
            />
          </div>

          <div className="flex items-center space-x-6">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-slate-800">Thứ Bảy, 14 Tháng 03, 2026</p>
              <p className="text-xs text-slate-500">Giờ làm việc: Ca sáng</p>
            </div>
            <button className="relative p-2 text-slate-400 hover:text-blue-600 transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
            </button>
          </div>
        </header>

        {/* CONTENT AREA */}
        <div className="flex-1 overflow-y-auto p-8">
          
          {activeMenu === 'dashboard' ? (
            <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              <div className="flex justify-between items-end">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">Tổng quan Khu bay</h2>
                  <p className="text-slate-500 mt-1">Giám sát trạng thái kỹ thuật và tiến độ kiểm tra trong ngày.</p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm shadow-blue-200 transition-colors flex items-center">
                  <FileBox className="w-4 h-4 mr-2" />
                  Xuất Báo cáo Ngày
                </button>
              </div>

              {/* STAT CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard 
                  title="Tổng số Tài sản" 
                  value={stats.totalAssets} 
                  icon={<Layers className="w-6 h-6 text-blue-600" />} 
                  trend="+2 tài sản mới" 
                  color="blue" 
                />
                <StatCard 
                  title="Đã kiểm tra (Hôm nay)" 
                  value={`${stats.inspectedToday}/${stats.totalAssets}`} 
                  icon={<ClipboardCheck className="w-6 h-6 text-emerald-600" />} 
                  trend="Đạt 26% tiến độ" 
                  color="emerald" 
                />
                <StatCard 
                  title="Điểm Không Đạt" 
                  value={stats.failed} 
                  icon={<AlertTriangle className="w-6 h-6 text-red-600" />} 
                  trend="Cần xử lý ngay" 
                  color="red" 
                  alert
                />
                <StatCard 
                  title="Đang Bảo trì" 
                  value={stats.maintenance} 
                  icon={<Wrench className="w-6 h-6 text-amber-600" />} 
                  trend="Hệ thống đèn, Sân đỗ" 
                  color="amber" 
                />
              </div>

              {/* MAIN WIDGETS */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Lệnh cảnh báo (Alerts) */}
                <div className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
                  <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                    <h3 className="font-semibold text-slate-800 flex items-center">
                      <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                      Điểm nóng cần chú ý
                    </h3>
                    <span className="text-xs font-medium bg-red-100 text-red-700 px-2.5 py-1 rounded-full">{alerts.length} sự cố</span>
                  </div>
                  <div className="p-4 flex-1 overflow-y-auto">
                    <div className="space-y-4">
                      {alerts.map((alert) => (
                        <div key={alert.id} className="p-4 rounded-lg border border-red-100 bg-red-50/30 flex flex-col hover:bg-red-50 transition-colors cursor-pointer group">
                          <div className="flex justify-between items-start mb-2">
                            <span className="font-semibold text-sm text-slate-800 group-hover:text-red-700 transition-colors">{alert.asset}</span>
                            <span className="text-xs text-slate-500 flex items-center">
                              <Clock className="w-3 h-3 mr-1" /> {alert.time}
                            </span>
                          </div>
                          <p className="text-sm text-slate-600 leading-snug">{alert.issue}</p>
                          <div className="mt-3 flex justify-end">
                            <button className="text-xs font-medium text-red-600 hover:text-red-800 flex items-center">
                              Lập bệnh án <ChevronRight className="w-3 h-3 ml-0.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Danh sách mới cập nhật (Recent Logs) */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
                  <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                    <h3 className="font-semibold text-slate-800 flex items-center">
                      <Activity className="w-4 h-4 text-blue-500 mr-2" />
                      Nhật ký kiểm tra mới nhất
                    </h3>
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-800">Xem tất cả</button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                          <th className="px-6 py-4 font-medium">Mã Phiếu</th>
                          <th className="px-6 py-4 font-medium">Thời gian</th>
                          <th className="px-6 py-4 font-medium">Tài sản / Khu vực</th>
                          <th className="px-6 py-4 font-medium">Người kiểm tra</th>
                          <th className="px-6 py-4 font-medium">Trạng thái</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-sm">
                        {recentLogs.map((log, index) => (
                          <tr key={index} className="hover:bg-slate-50 transition-colors cursor-pointer">
                            <td className="px-6 py-4 font-medium text-blue-600">{log.id}</td>
                            <td className="px-6 py-4 text-slate-500">{log.time}</td>
                            <td className="px-6 py-4 font-medium text-slate-800">{log.asset}</td>
                            <td className="px-6 py-4 text-slate-600">{log.inspector}</td>
                            <td className="px-6 py-4">
                              <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${
                                log.status === 'Đạt' 
                                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                                  : 'bg-red-50 text-red-700 border-red-200'
                              }`}>
                                {log.status === 'Đạt' ? <CheckCircle2 className="w-3 h-3 mr-1" /> : <AlertTriangle className="w-3 h-3 mr-1" />}
                                {log.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-slate-400 animate-in fade-in duration-300">
              <Settings className="w-16 h-16 mb-4 opacity-20" />
              <h2 className="text-xl font-medium text-slate-600">Trang đang được phát triển</h2>
              <p className="mt-2 text-sm">Bạn đang xem tab: <span className="font-semibold text-blue-600">{activeMenu}</span></p>
              <button 
                onClick={() => setActiveMenu('dashboard')}
                className="mt-6 px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg text-sm font-medium transition-colors"
              >
                Quay lại Tổng quan
              </button>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

// Component Menu Button cho Sidebar
const MenuButton = ({ icon, label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium ${
        active 
          ? 'bg-blue-600 text-white shadow-md shadow-blue-900/20' 
          : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
      }`}
    >
      <span className={`${active ? 'text-blue-200' : 'text-slate-500'}`}>{icon}</span>
      <span>{label}</span>
    </button>
  );
};

// Component Thẻ Thống kê (Stat Card)
const StatCard = ({ title, value, icon, trend, color, alert }) => {
  const colorClasses = {
    blue: 'bg-blue-50',
    emerald: 'bg-emerald-50',
    red: 'bg-red-50',
    amber: 'bg-amber-50',
  };

  return (
    <div className={`bg-white rounded-xl p-6 shadow-sm border ${alert ? 'border-red-200 shadow-red-100/50' : 'border-slate-200'} relative overflow-hidden group`}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-slate-800">{value}</h3>
        </div>
        <div className={`p-3 rounded-xl ${colorClasses[color]}`}>
          {icon}
        </div>
      </div>
      <div className="mt-4 flex items-center text-sm">
        <span className={`font-medium ${alert ? 'text-red-600' : 'text-slate-500'}`}>{trend}</span>
      </div>
      
      {/* Decorative background element */}
      <div className={`absolute -right-6 -bottom-6 w-24 h-24 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${colorClasses[color].replace('50', '500')}`}></div>
    </div>
  );
};

export default App;
