import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type DashboardCardProps = {
  title: string;
  value: string;
  subtitle?: string;
};

export default function DashboardCard({
  title,
  value,
  subtitle,
}: DashboardCardProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 text-white">
      <CardHeader>
        <CardTitle className="text-zinc-400 text-sm">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <h2 className="text-4xl font-bold">
          {value}
        </h2>

        {subtitle && (
          <p className="mt-2 text-sm text-zinc-500">
            {subtitle}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
