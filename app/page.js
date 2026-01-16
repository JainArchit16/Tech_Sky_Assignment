import Card from "@/components/ui/Card";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card title="Total Leads">
        <p className="text-3xl font-bold">24</p>
      </Card>

      <Card title="Calls Today">
        <p className="text-3xl font-bold">8</p>
      </Card>

      <Card title="Conversion Rate">
        <p className="text-3xl font-bold">18%</p>
      </Card>
    </div>
  );
}
