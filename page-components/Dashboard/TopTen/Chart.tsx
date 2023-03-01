import { BarChart, Bar, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export const Chart = () => {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Page H',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Page I',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Page J',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ]

  return (
    <ResponsiveContainer width='100%' height='70%'>
      <BarChart
        width={300}
        height={200}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={16}
      >
        <YAxis dataKey='pv' />
        <Tooltip
          itemStyle={{ fontSize: '16px' }}
          labelStyle={{ display: 'none' }}
          wrapperStyle={{
            outline: 'none',
            background: '#282c35',
            borderRadius: '7px',
          }}
          contentStyle={{
            backgroundColor: 'none',
            background: 'none',
            border: 0,
          }}
          cursor={{ fill: 'transparent' }}
        />
        <Bar dataKey='pv' fill='#9fef00' />
      </BarChart>
    </ResponsiveContainer>
  )
}
