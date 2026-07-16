import MainLayout from "@/components/layout/MainLayout";
import DashboardCard from "@/components/dashboard/DashboardCard";

export default function Home() {
  return (
    <MainLayout>
      <div className="space-y-8">

        <div>
          <h1 className="text-4xl font-bold">
            Dashboard
          </h1>

          <p className="text-zinc-400">
            Welcome back to your homelab.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <DashboardCard
            title="CPU Usage"
            value="12%"
            subtitle="Normal"
          />

          <DashboardCard
            title="Memory"
            value="31%"
            subtitle="12 GB / 32 GB"
          />

          <DashboardCard
            title="Storage"
            value="17%"
            subtitle="2.6 TB Free"
          />

          <DashboardCard
            title="Containers"
            value="14"
            subtitle="All running"
          />

        </div>

      </div>
    </MainLayout>
  );
}
