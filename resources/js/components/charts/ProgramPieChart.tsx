import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

import { programData } from '@/data/chart-data';

export default function ProgramPieChart() {
    return (
        <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={programData}
                        dataKey="students"
                        nameKey="program"
                        outerRadius={95}
                        label
                    >
                        {programData.map((item) => (
                            <Cell
                                key={item.program}
                                fill={item.color}
                            />
                        ))}
                    </Pie>

                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}