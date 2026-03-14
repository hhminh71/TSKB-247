import React, { useState } from 'react';
import { 
  LayoutDashboard, Layers, ClipboardCheck, FileBox, Activity, Settings, 
  Bell, Search, AlertTriangle, CheckCircle2, Wrench, Clock, ChevronRight, 
  PlaneTakeoff, Plus, Filter, MoreVertical, MapPin, Calendar, User, Save, XCircle, MinusCircle,
  Menu, X // Thêm icon Menu và X
} from 'lucide-react';

const App = () => {
  const [activeMenu, setActiveMenu] = useState('inspection'); 
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State quản lý menu mobile
  
  // State cho Sổ tay kiểm tra
  const [selectedAssetId, setSelectedAssetId] = useState('');
  const [inspectionData, setInspectionData] = useState({});

  // ---------------- MOCK DATA ----------------
  const stats = { totalAssets: 45, inspectedToday: 12, failed: 3, maintenance: 2 };

  // Dữ liệu Danh mục tài sản
  const masterAssets = [
    { id: 'CHC-01', name: 'Đường cất hạ cánh 01', type: 'Đường băng', location: 'Khu vực Bắc', status: 'Đang khai thác', color: 'emerald', image: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&q=80&w=400&h=250', criteria: ['Tình trạng rạn nứt mặt đường', 'Tình trạng sơn kẻ tín hiệu', 'Tình trạng vệt cao su'] },
    { id: 'DL-E', name: 'Đường lăn E', type: 'Đường lăn', location: 'Khu vực Nam', status: 'Đang khai thác', color: 'emerald', image: 'https://images.unsplash.com/photo-1603588934504-2070e19fb252?auto=format&fit=crop&q=80&w=400&h=250', criteria: ['Tình trạng rạn nứt mặt đường', 'Tình trạng sơn kẻ tín hiệu', 'Tình trạng lề đường lăn'] },
    { id: 'SD-01', name: 'Sân đỗ tàu bay số 1', type: 'Sân đỗ', location: 'Khu vực Nhà ga', status: 'Cảnh báo', color: 'amber', image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=400&h=250', criteria: ['Tình trạng bề mặt BTXM', 'Tình trạng khe co giãn', 'Tình trạng neo buộc tàu bay'] },
    { id: 'HT-DEN', name: 'Hệ thống đèn tiếp cận', type: 'Hệ thống điện', location: 'Đầu 01', status: 'Đang bảo trì', color: 'red', image: 'https://images.unsplash.com/photo-1517594422361-5e1f70932ce9?auto=format&fit=crop&q=80&w=400&h=250', criteria: ['Tình trạng bóng đèn cháy/hỏng', 'Tình trạng chóa đèn', 'Tình trạng cáp cấp điện'] },
  ];

  const filteredAssets = masterAssets.filter(asset => 
    asset.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    asset.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeAssetForInspection = masterAssets.find(a => a.id === selectedAssetId);

  const handleCheck = (criteriaIndex, status) => {
    setInspectionData(prev => ({ ...prev, [criteriaIndex]: { ...prev[criteriaIndex], status } }));
  };

  const handleNote = (criteriaIndex, note) => {
    setInspectionData(prev => ({ ...prev, [criteriaIndex]: { ...prev[criteriaIndex], note } }));
  };

  // Hàm chuyển trang kèm theo việc tự động đóng Menu trên điện thoại
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-800 overflow-hidden relative">
      
      {/* LỚP PHỦ MỜ (OVERLAY) CHO MOBILE */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 md:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-slate-900 text-slate-300 flex flex-col shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 shrink-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-20 flex items-center justify-between px-6 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center">
            <PlaneTakeoff className="w-8 h-8 text-blue-500 mr-3 shrink-0" />
            <div>
              <h1 className="text-base font-bold text-white tracking-wide flex items-center">
                TSKB-247 <span className="ml-2 text-[11px] bg-blue-600 text-white px-2 py-0.5 rounded-full font-semibold">KHU BAY</span>
              </h1>
              <p className="text-[10px] text-slate-400 font-medium tracking-wider uppercase mt-0.5">Phòng TC-KH</p>
            </div>
          </div>
          {/* Nút Đóng Menu trên Mobile */}
          <button className="md:hidden text-slate-400 hover:text-white p-1" onClick={() => setIsMobileMenuOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 py-6 overflow-y-auto">
          <p className="px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Quản lý trung tâm</p>
          <nav className="space-y-1 px-3">
            <MenuButton icon={<LayoutDashboard size={20}/>} label="Trang tổng quan" active={activeMenu === 'dashboard'} onClick={() => handleMenuClick('dashboard')} />
            <MenuButton icon={<Layers size={20}/>} label="Danh mục Tài sản" active={activeMenu === 'assets'} onClick={() => handleMenuClick('assets')} />
            <MenuButton icon={<ClipboardCheck size={20}/>} label="Sổ tay Kiểm tra" active={activeMenu === 'inspection'} onClick={() => handleMenuClick('inspection')} />
            <MenuButton icon={<Activity size={20}/>} label="Hồ sơ Bệnh án" active={activeMenu === 'history'} onClick={() => handleMenuClick('history')} />
            <MenuButton icon={<FileBox size={20}/>} label="Xuất Sổ lưu trữ" active={activeMenu === 'export'} onClick={() => handleMenuClick('export')} />
          </nav>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col overflow-hidden w-full h-full relative z-0">
        
        {/* HEADER */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-8 shadow-sm shrink-0">
          
          <div className="flex items-center gap-3 w-full max-w-sm">
            {/* Nút Hamburger mở Menu trên Mobile */}
            <button 
              className="md:hidden p-2 -ml-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>

            <div className="flex items-center bg-slate-100 px-4 py-2 rounded-lg w-full border border-slate-200 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
              <Search className="w-5 h-5 text-slate-400 mr-2 shrink-0" />
              <input 
                type="text" 
                placeholder="Tra cứu tài sản..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none text-sm w-full text-slate-700 placeholder-slate-400"
              />
            </div>
          </div>

          <div className="flex items-center space-x-6 ml-4">
            <div className="text-right hidden lg:block">
              <p className="text-sm font-semibold text-slate-800">Thứ Bảy, 14 Tháng 03, 2026</p>
              <p className="text-xs text-slate-500">Giờ làm việc: Ca sáng</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shadow-md cursor-pointer shrink-0">A</div>
          </div>
        </header>

        {/* CONTENT AREA */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8">
          
          {/* MÀN HÌNH DASHBOARD */}
          {activeMenu === 'dashboard' && (
            <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 pb-10">
               <div className="flex justify-between items-end">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">Tổng quan Khu bay</h2>
                  <p className="text-slate-500 mt-1 text-sm sm:text-base">Giám sát trạng thái kỹ thuật và tiến độ kiểm tra trong ngày.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Tổng số Tài sản" value={stats.totalAssets} icon={<Layers className="w-6 h-6 text-blue-600" />} trend="+2 tài sản mới" color="blue" />
                <StatCard title="Đã kiểm tra" value={`${stats.inspectedToday}/${stats.totalAssets}`} icon={<ClipboardCheck className="w-6 h-6 text-emerald-600" />} trend="Đạt 26% tiến độ" color="emerald" />
                <StatCard title="Điểm Không Đạt" value={stats.failed} icon={<AlertTriangle className="w-6 h-6 text-red-600" />} trend="Cần xử lý ngay" color="red" alert />
                <StatCard title="Đang Bảo trì" value={stats.maintenance} icon={<Wrench className="w-6 h-6 text-amber-600" />} trend="Hệ thống đèn, Sân đỗ" color="amber" />
              </div>
            </div>
          )}

          {/* MÀN HÌNH DANH MỤC TÀI SẢN */}
          {activeMenu === 'assets' && (
             <div className="max-w-7xl mx-auto space-y-6 animate-in fade-in duration-500 pb-10">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 flex items-center">
                    <Layers className="mr-2 text-blue-600" /> Danh mục Tài sản Khu bay
                  </h2>
                  <p className="text-slate-500 mt-1 text-sm">Quản lý thông tin, vòng đời và phân cấp tài sản.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAssets.map((asset) => (
                  <div key={asset.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all group cursor-pointer flex flex-col">
                    <div className="h-40 relative overflow-hidden bg-slate-100">
                      <img src={asset.image} alt={asset.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded uppercase">{asset.id}</span>
                        <span className="text-xs font-medium text-blue-600">{asset.type}</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 leading-tight mb-2 group-hover:text-blue-600 transition-colors">{asset.name}</h3>
                      <p className="text-sm text-slate-500 flex items-center mb-6"><MapPin className="w-3.5 h-3.5 mr-1.5 opacity-70" /> {asset.location}</p>
                      <div className="mt-auto grid grid-cols-2 gap-2 border-t border-slate-100 pt-4">
                        <button className="text-center py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">Xem chi tiết</button>
                        <button 
                          onClick={() => { setSelectedAssetId(asset.id); handleMenuClick('inspection'); }}
                          className="text-center py-2 text-sm font-medium text-white bg-slate-800 hover:bg-blue-600 rounded-lg shadow-sm transition-colors flex items-center justify-center">
                          <ClipboardCheck className="w-4 h-4 mr-1.5" /> Kiểm tra
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MÀN HÌNH SỔ TAY KIỂM TRA */}
          {activeMenu === 'inspection' && (
            <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
              
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-800 flex items-center justify-center">
                  <ClipboardCheck className="mr-2 text-blue-600" /> Nhập Sổ tay Kiểm tra
                </h2>
                <p className="text-slate-500 mt-2 text-sm">Ghi nhận tình trạng kỹ thuật hiện trường ngay trên thiết bị di động.</p>
              </div>

              {/* Box Chọn Tài sản */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 sm:p-6">
                <label className="block text-sm font-semibold text-slate-700 mb-2">1. Chọn Tài sản cần kiểm tra</label>
                <select 
                  className="w-full bg-slate-50 border border-slate-300 text-slate-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 shadow-sm"
                  value={selectedAssetId}
                  onChange={(e) => {
                    setSelectedAssetId(e.target.value);
                    setInspectionData({}); 
                  }}
                >
                  <option value="">-- Vui lòng chọn tài sản --</option>
                  {masterAssets.map(asset => (
                    <option key={asset.id} value={asset.id}>[{asset.id}] - {asset.name}</option>
                  ))}
                </select>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center text-sm text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                    <span className="font-medium">14/03/2026 - 08:30</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <User className="w-4 h-4 mr-2 text-blue-500" />
                    <span className="font-medium">Nguyễn Văn A</span>
                  </div>
                </div>
              </div>

              {/* Form Đánh giá */}
              {activeAssetForInspection ? (
                <div className="space-y-4">
                  <h3 className="text-base font-bold text-slate-800 mb-3 px-1">2. Nội dung kiểm tra chi tiết</h3>
                  
                  {activeAssetForInspection.criteria.map((item, index) => {
                    const status = inspectionData[index]?.status;
                    return (
                      <div key={index} className={`bg-white rounded-xl shadow-sm border p-5 transition-colors ${status === 'fail' ? 'border-red-300 bg-red-50/30' : 'border-slate-200'}`}>
                        <p className="font-semibold text-slate-800 text-sm sm:text-base mb-4">{index + 1}. {item}</p>
                        
                        <div className="grid grid-cols-3 gap-2 sm:gap-4">
                          <button 
                            onClick={() => handleCheck(index, 'pass')}
                            className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl border-2 transition-all ${status === 'pass' ? 'border-emerald-500 bg-emerald-50 text-emerald-700 shadow-sm' : 'border-slate-100 bg-slate-50 text-slate-500 hover:border-emerald-200'}`}
                          >
                            <CheckCircle2 className={`w-6 h-6 sm:w-8 sm:h-8 mb-1 sm:mb-2 ${status === 'pass' ? 'text-emerald-500' : 'text-slate-400'}`} />
                            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">Đạt</span>
                          </button>
                          
                          <button 
                            onClick={() => handleCheck(index, 'fail')}
                            className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl border-2 transition-all ${status === 'fail' ? 'border-red-500 bg-red-50 text-red-700 shadow-sm' : 'border-slate-100 bg-slate-50 text-slate-500 hover:border-red-200'}`}
                          >
                            <XCircle className={`w-6 h-6 sm:w-8 sm:h-8 mb-1 sm:mb-2 ${status === 'fail' ? 'text-red-500' : 'text-slate-400'}`} />
                            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-center">Không đạt</span>
                          </button>

                          <button 
                            onClick={() => handleCheck(index, 'na')}
                            className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl border-2 transition-all ${status === 'na' ? 'border-slate-400 bg-slate-100 text-slate-700 shadow-sm' : 'border-slate-100 bg-slate-50 text-slate-500 hover:border-slate-300'}`}
                          >
                            <MinusCircle className={`w-6 h-6 sm:w-8 sm:h-8 mb-1 sm:mb-2 ${status === 'na' ? 'text-slate-500' : 'text-slate-400'}`} />
                            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-center">K.A.D</span>
                          </button>
                        </div>

                        {status === 'fail' && (
                          <div className="mt-4 animate-in fade-in slide-in-from-top-2">
                            <label className="block text-xs font-semibold text-red-700 uppercase tracking-wider mb-2">Mô tả dấu hiệu bất thường <span className="text-red-500">*</span></label>
                            <textarea 
                              rows="2" 
                              className="w-full bg-white border border-red-200 text-slate-800 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-3 shadow-sm"
                              placeholder="Nhập chi tiết vị trí, mức độ hư hỏng..."
                              value={inspectionData[index]?.note || ''}
                              onChange={(e) => handleNote(index, e.target.value)}
                            ></textarea>
                          </div>
                        )}
                      </div>
                    );
                  })}

                  <div className="pt-6">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-blue-200 transition-all flex items-center justify-center group">
                      <Save className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      Lưu kết quả & Ký nhận
                    </button>
                    <p className="text-center text-xs text-slate-400 mt-3">Dữ liệu sẽ được mã hóa và đồng bộ lên máy chủ an toàn.</p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-16 bg-slate-50 border border-slate-200 border-dashed rounded-xl">
                  <ClipboardCheck className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                  <p className="text-slate-500 font-medium">Vui lòng chọn tài sản ở bước 1 để hiển thị biểu mẫu.</p>
                </div>
              )}
            </div>
          )}

          {/* CÁC MÀN HÌNH KHÁC (Giữ chỗ) */}
          {activeMenu !== 'dashboard' && activeMenu !== 'assets' && activeMenu !== 'inspection' && (
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
