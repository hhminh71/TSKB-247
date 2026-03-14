import React, { useState } from 'react';
import { 
  LayoutDashboard, Layers, ClipboardCheck, FileBox, Activity, Settings, 
  Bell, Search, AlertTriangle, CheckCircle2, Wrench, Clock, ChevronRight, 
  PlaneTakeoff, Plus, Filter, MoreVertical, MapPin
} from 'lucide-react';

const App = () => {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  // ---------------- MOCK DATA ----------------
  const stats = { totalAssets: 45, inspectedToday: 12, failed: 3, maintenance: 2 };

  // Dữ liệu Danh mục tài sản (Mô phỏng từ Google Sheets)
  const masterAssets = [
    { id: 'CHC-01', name: 'Đường cất hạ cánh 01', type: 'Đường băng', location: 'Khu vực Bắc', status: 'Đang khai thác', color: 'emerald', image: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&q=80&w=400&h=250' },
    { id: 'DL-E', name: 'Đường lăn E', type: 'Đường lăn', location: 'Khu vực Nam', status: 'Đang khai thác', color: 'emerald', image: 'https://images.unsplash.com/photo-1603588934504-2070e19fb252?auto=format&fit=crop&q=80&w=400&h=250' },
    { id: 'SD-01', name: 'Sân đỗ tàu bay số 1', type: 'Sân đỗ', location: 'Khu vực Nhà ga', status: 'Cảnh báo', color: 'amber', image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=400&h=250' },
    { id: 'HT-DEN', name: 'Hệ thống đèn tiếp cận', type: 'Hệ thống điện', location: 'Đầu 01', status: 'Đang bảo trì', color: 'red', image: 'https://images.unsplash.com/photo-1517594422361-5e1f70932ce9?auto=format&fit=crop&q=80&w=400&h=250' },
    { id: 'DL-W', name: 'Đường lăn W', type: 'Đường lăn', location: 'Khu vực Tây', status: 'Đang khai thác', color: 'emerald', image: 'https://images.unsplash.com/photo-1580905543780-f02787c8801b?auto=format&fit=crop&q=80&w=400&h=250' },
    { id: 'TR-1', name: 'Trạm điện nguồn số 1', type: 'Hệ thống điện', location: 'Khu vực trạm', status: 'Đang khai thác', color: 'emerald', image: 'https://images.unsplash.com/photo-1493406300581-484b937cdc41?auto=format&fit=crop&q=80&w=400&h=250' },
  ];

  // Lọc tài sản dựa trên ô tìm kiếm
  const filteredAssets = masterAssets.filter(asset => 
    asset.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    asset.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* SIDEBAR (Giữ nguyên) */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col shadow-2xl z-10 hidden md:flex">
        <div className="h-20 flex items-center px-6 border-b border-slate-800 bg-slate-950">
          <PlaneTakeoff className="w-8 h-8 text-blue-500 mr-3" />
          <div>
            <h1 className="text-base font-bold text-white tracking-wide flex items-center">
              TSKB-247 <span className="ml-2 text-[11px] bg-blue-600 text-white px-2 py-0.5 rounded-full font-semibold">KHU BAY</span>
            </h1>
            <p className="text-[10px] text-slate-400 font-medium tracking-wider uppercase mt-0.5">Phòng TC-KH</p>
          </div>
        </div>

        <div className="flex-1 py-6 overflow-y-auto">
          <p className="px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Quản lý trung tâm</p>
          <nav className="space-y-1 px-3">
            <MenuButton icon={<LayoutDashboard size={20}/>} label="Trang tổng quan" active={activeMenu === 'dashboard'} onClick={() => setActiveMenu('dashboard')} />
            <MenuButton icon={<Layers size={20}/>} label="Danh mục Tài sản" active={activeMenu === 'assets'} onClick={() => setActiveMenu('assets')} />
            <MenuButton icon={<ClipboardCheck size={20}/>} label="Sổ tay Kiểm tra" active={activeMenu === 'inspection'} onClick={() => setActiveMenu('inspection')} />
            <MenuButton icon={<Activity size={20}/>} label="Hồ sơ Bệnh án" active={activeMenu === 'history'} onClick={() => setActiveMenu('history')} />
            <MenuButton icon={<FileBox size={20}/>} label="Xuất Sổ lưu trữ" active={activeMenu === 'export'} onClick={() => setActiveMenu('export')} />
          </nav>
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
              placeholder="Tra cứu tài sản, mã định danh..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none outline-none text-sm w-full text-slate-700 placeholder-slate-400"
            />
          </div>

          <div className="flex items-center space-x-6">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-slate-800">Thứ Bảy, 14 Tháng 03, 2026</p>
              <p className="text-xs text-slate-500">Giờ làm việc: Ca sáng</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shadow-md cursor-pointer">A</div>
          </div>
        </header>

        {/* CONTENT AREA */}
        <div className="flex-1 overflow-y-auto p-8">
          
          {/* MÀN HÌNH DASHBOARD */}
          {activeMenu === 'dashboard' && (
            <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
               <div className="flex justify-between items-end">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">Tổng quan Khu bay</h2>
                  <p className="text-slate-500 mt-1">Giám sát trạng thái kỹ thuật và tiến độ kiểm tra trong ngày.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Tổng số Tài sản" value={stats.totalAssets} icon={<Layers className="w-6 h-6 text-blue-600" />} trend="+2 tài sản mới" color="blue" />
                <StatCard title="Đã kiểm tra" value={`${stats.inspectedToday}/${stats.totalAssets}`} icon={<ClipboardCheck className="w-6 h-6 text-emerald-600" />} trend="Đạt 26% tiến độ" color="emerald" />
                <StatCard title="Điểm Không Đạt" value={stats.failed} icon={<AlertTriangle className="w-6 h-6 text-red-600" />} trend="Cần xử lý ngay" color="red" alert />
                <StatCard title="Đang Bảo trì" value={stats.maintenance} icon={<Wrench className="w-6 h-6 text-amber-600" />} trend="Hệ thống đèn, Sân đỗ" color="amber" />
              </div>
              <div className="p-10 text-center bg-white rounded-xl border border-slate-200 border-dashed">
                  <p className="text-slate-500">Khu vực hiển thị log hệ thống (Giữ nguyên như cũ)</p>
              </div>
            </div>
          )}

          {/* MÀN HÌNH DANH MỤC TÀI SẢN (GALLERY VIEW) */}
          {activeMenu === 'assets' && (
            <div className="max-w-7xl mx-auto space-y-6 animate-in fade-in duration-500">
              
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 flex items-center">
                    <Layers className="mr-2 text-blue-600" /> Danh mục Tài sản Khu bay
                  </h2>
                  <p className="text-slate-500 mt-1 text-sm">Quản lý thông tin, vòng đời và phân cấp tài sản.</p>
                </div>
                
                <div className="flex space-x-3">
                  <button className="bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center shadow-sm">
                    <Filter className="w-4 h-4 mr-2 text-slate-500" />
                    Lọc trạng thái
                  </button>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm shadow-blue-200 transition-colors flex items-center">
                    <Plus className="w-4 h-4 mr-2" />
                    Thêm tài sản mới
                  </button>
                </div>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {filteredAssets.map((asset) => (
                  <div key={asset.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all group cursor-pointer flex flex-col">
                    
                    {/* Image Header */}
                    <div className="h-40 relative overflow-hidden bg-slate-100">
                      <img 
                        src={asset.image} 
                        alt={asset.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm
                          ${asset.color === 'emerald' ? 'bg-emerald-500 text-white' : ''}
                          ${asset.color === 'amber' ? 'bg-amber-500 text-white' : ''}
                          ${asset.color === 'red' ? 'bg-red-500 text-white' : ''}
                        `}>
                          {asset.status}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-slate-800 p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreVertical className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded uppercase">{asset.id}</span>
                        <span className="text-xs font-medium text-blue-600">{asset.type}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-slate-800 leading-tight mb-2 group-hover:text-blue-600 transition-colors">
                        {asset.name}
                      </h3>
                      
                      <p className="text-sm text-slate-500 flex items-center mb-6">
                        <MapPin className="w-3.5 h-3.5 mr-1.5 opacity-70" /> {asset.location}
                      </p>

                      <div className="mt-auto grid grid-cols-2 gap-2 border-t border-slate-100 pt-4">
                        <button className="text-center py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          Xem chi tiết
                        </button>
                        <button className="text-center py-2 text-sm font-medium text-white bg-slate-800 hover:bg-blue-600 rounded-lg shadow-sm transition-colors flex items-center justify-center">
                          <ClipboardCheck className="w-4 h-4 mr-1.5" /> Kiểm tra
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredAssets.length === 0 && (
                <div className="text-center py-20">
                  <Layers className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-slate-600">Không tìm thấy tài sản nào</h3>
                  <p className="text-slate-400 text-sm mt-1">Vui lòng thử lại với từ khóa khác.</p>
                </div>
              )}

            </div>
          )}

          {/* CÁC MÀN HÌNH KHÁC (Giữ chỗ) */}
          {activeMenu !== 'dashboard' && activeMenu !== 'assets' && (
            <div className="h-full flex flex-col items-center justify-center text-slate-400 animate-in fade-in duration-300">
              <Settings className="w-16 h-16 mb-4 opacity-20" />
              <h2 className="text-xl font-medium text-slate-600">Trang đang được phát triển</h2>
              <p className="mt-2 text-sm">Bạn đang xem tab: <span className="font-semibold text-blue-600">{activeMenu}</span></p>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

const MenuButton = ({ icon, label, active, onClick }) => (
  <button onClick={onClick} className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium ${active ? 'bg-blue-600 text-white shadow-md shadow-blue-900/20' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'}`}>
    <span className={`${active ? 'text-blue-200' : 'text-slate-500'}`}>{icon}</span>
    <span>{label}</span>
  </button>
);

const StatCard = ({ title, value, icon, trend, color, alert }) => (
  <div className={`bg-white rounded-xl p-6 shadow-sm border ${alert ? 'border-red-200 shadow-red-100/50' : 'border-slate-200'}`}>
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
        <h3 className="text-3xl font-bold text-slate-800">{value}</h3>
      </div>
      <div className={`p-3 rounded-xl bg-${color}-50`}>{icon}</div>
    </div>
    <div className="mt-4 text-sm font-medium text-slate-500">{trend}</div>
  </div>
);

export default App;
