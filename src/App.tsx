import {
  Bluetooth,
  Ear,
  FileText,
  LayoutDashboard,
  LineChart,
  Menu,
  Settings,
  SignalHigh,
  SignalLow,
  SignalMedium
} from 'lucide-react';

export default function App() {
  return (
    <div className="bg-white flex h-screen w-full overflow-hidden font-sans text-slate-900">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 bg-slate-50/50">
        <TopAppBar />
        <MainContent />
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col h-screen w-[240px] border-r border-slate-100 bg-white py-6 px-6 shrink-0 z-20">
      <div className="flex items-center gap-3 mb-12">
        <Ear className="text-blue-600 w-8 h-8" strokeWidth={2.5} />
        <h1 className="font-bold text-xl tracking-tight">HearingConnect</h1>
      </div>

      <nav className="flex-1 flex flex-col gap-1">
        <a className="px-3 py-2 text-slate-500 hover:text-slate-900 rounded-md font-medium text-sm flex items-center gap-3 transition-colors duration-200" href="#">
          <LayoutDashboard className="w-5 h-5" />
          Dashboard
        </a>
        <a className="px-3 py-2 bg-slate-50 text-blue-600 rounded-md font-medium text-sm flex items-center gap-3 transition-colors duration-200" href="#">
          <Ear className="w-5 h-5" />
          Devices
        </a>
        <a className="px-3 py-2 text-slate-500 hover:text-slate-900 rounded-md font-medium text-sm flex items-center gap-3 transition-colors duration-200" href="#">
          <LineChart className="w-5 h-5" />
          ADL Insights
        </a>
        <a className="px-3 py-2 text-slate-500 hover:text-slate-900 rounded-md font-medium text-sm flex items-center gap-3 transition-colors duration-200" href="#">
          <FileText className="w-5 h-5" />
          Reports
        </a>
        <a className="px-3 py-2 text-slate-500 hover:text-slate-900 rounded-md font-medium text-sm flex items-center gap-3 transition-colors duration-200" href="#">
          <Settings className="w-5 h-5" />
          Settings
        </a>
      </nav>
    </aside>
  );
}

function TopAppBar() {
  return (
    <header className="h-[72px] px-8 border-b border-slate-100 flex items-center justify-between bg-white z-10 shrink-0">
      <div className="flex items-center gap-4">
        <button className="md:hidden p-2 text-slate-400 rounded-full hover:bg-slate-50 transition-colors">
          <Menu className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-semibold">HearingConnect Pro</h2>
      </div>
    </header>
  );
}

function MainContent() {
  return (
    <main className="flex-1 overflow-y-auto p-8 relative">
      <div className="mb-8 relative rounded-2xl overflow-hidden bg-blue-50 p-8 border border-blue-100 shadow-sm flex items-center justify-between">
        <div className="z-10 relative max-w-2xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Scanning Active</span>
          </div>
          <h1 className="text-2xl font-bold mb-2">Device Discovery</h1>
          <p className="text-sm text-slate-500">Searching for nearby compatible hearing instruments via Bluetooth. Ensure devices are in pairing mode.</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-8">
        <span className="text-sm font-medium text-slate-500 mr-2">Filter by:</span>
        <button className="px-4 py-1.5 rounded-full bg-slate-800 text-white text-xs font-semibold shadow-sm transition-transform hover:scale-[0.98] cursor-pointer">
          All
        </button>
        <button className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-500 text-xs font-semibold hover:border-slate-300 hover:text-slate-700 transition-all cursor-pointer">
          Single
        </button>
        <button className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-500 text-xs font-semibold hover:border-slate-300 hover:text-slate-700 transition-all cursor-pointer">
          Left/Right Pairs
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DeviceCard
          type="pair"
          title="Audeo Lumity L90"
          sn="23498871 (L) / 23498872 (R)"
          signal="-42 dBm"
          icon={<Ear className="text-blue-500 w-6 h-6" />}
          signalIcon={<SignalHigh className="text-blue-500 w-3 h-3" />}
          isPrimaryAction={true}
        />
        <DeviceCard
          type="single-right"
          title="Oticon Intent 1"
          sn="88472910"
          signal="-68 dBm"
          icon={<Ear className="text-slate-400 w-6 h-6" />}
          signalIcon={<SignalMedium className="text-slate-400 w-3 h-3" />}
          isPrimaryAction={false}
        />
        <DeviceCard
          type="single-left"
          title="Starkey Genesis AI"
          sn="11928374"
          signal="-85 dBm"
          icon={<Ear className="text-slate-400 w-6 h-6" />}
          signalIcon={<SignalLow className="text-slate-400 w-3 h-3" />}
          isPrimaryAction={false}
        />
      </div>
    </main>
  );
}

function DeviceCard({
  type,
  title,
  sn,
  signal,
  icon,
  signalIcon,
  isPrimaryAction
}: {
  type: 'pair' | 'single-right' | 'single-left';
  title: string;
  sn: string;
  signal: string;
  icon: React.ReactNode;
  signalIcon: React.ReactNode;
  isPrimaryAction: boolean;
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col gap-6 hover:shadow-md transition-shadow duration-300 relative overflow-hidden group">
      {isPrimaryAction && <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>}
      <div className="flex justify-between items-start">
        <div className="w-10 h-10 bg-slate-50 flex items-center justify-center rounded-lg">
          {icon}
        </div>
        <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-md">
          {signalIcon}
          <span className="text-xs font-medium text-slate-500">{signal}</span>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Badge type={type} />
        </div>
        <h3 className="text-base font-semibold text-slate-900 mb-1">{title}</h3>
        <p className="text-sm text-slate-500">SN: {sn}</p>
      </div>
      <div className="mt-auto pt-4 border-t border-slate-100 flex gap-3">
        {isPrimaryAction ? (
          <button className="flex-1 bg-slate-900 text-white text-xs font-bold py-2.5 rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 cursor-pointer">
            <Bluetooth className="w-4 h-4" />
            Pair Device
          </button>
        ) : (
          <button className="flex-1 bg-white border-2 border-slate-50 hover:border-slate-100 text-slate-500 hover:text-slate-700 text-xs font-bold py-2.5 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 cursor-pointer uppercase tracking-widest">
            <Bluetooth className="w-4 h-4" />
            Pair Device
          </button>
        )}
      </div>
    </div>
  );
}

function Badge({ type }: { type: 'pair' | 'single-right' | 'single-left' }) {
  if (type === 'pair') {
    return (
      <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase tracking-wider">
        Pair
      </span>
    );
  }
  return (
    <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded uppercase tracking-wider">
      {type === 'single-right' ? 'Single • Right' : 'Single • Left'}
    </span>
  );
}
