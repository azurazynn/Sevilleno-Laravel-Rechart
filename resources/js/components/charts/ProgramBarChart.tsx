import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

import { programData } from '@/data/chart-data';

export default function ProgramBarChart() {
    return (
        <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={programData}>
                    <XAxis dataKey="program" />
                    <YAxis />
                    <Tooltip />
                    <Bar
                        dataKey="students"
                        fill="#16a34a"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}