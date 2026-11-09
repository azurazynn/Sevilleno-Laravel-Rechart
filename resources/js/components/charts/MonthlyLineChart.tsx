import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

import { monthlyData } from '@/data/chart-data';

export default function MonthlyLineChart() {
    return (
        <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line
                        dataKey="students"
                        stroke="#2563eb"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}