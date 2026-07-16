import {
  House,
  Film,
  Download,
  Activity,
  Container,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-72 border-r border-zinc-800 bg-zinc-900">

      <div className="p-6">

        <h1 className="text-2xl font-bold">
          MCC
        </h1>

        <p className="text-sm text-zinc-400">
          Media Control Center
        </p>

      </div>

      <nav className="space-y-2 px-4">

        <SidebarItem icon={<House size={18} />} text="Dashboard" />
        <SidebarItem icon={<Film size={18} />} text="Media" />
        <SidebarItem icon={<Download size={18} />} text="Downloads" />
        <SidebarItem icon={<Activity size={18} />} text="Monitoring" />
        <SidebarItem icon={<Container size={18} />} text="Containers" />
        <SidebarItem icon={<Settings size={18} />} text="Settings" />

      </nav>

    </aside>
  );
}

function SidebarItem({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-zinc-800">

      {icon}

      {text}

    </button>
  );
}
