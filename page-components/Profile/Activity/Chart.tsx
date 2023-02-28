import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

export const Chart = () => {
  const data = [
    {
      name: 'Янв',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Фев',
      uv: 3000,
      amt: 2210,
    },
    {
      name: 'Март',
      uv: 2000,
      amt: 2290,
    },
    {
      name: 'Апрель',
      uv: 2780,
      amt: 2000,
    },
    {
      name: 'Март',
      uv: 1890,
      amt: 2181,
    },
    {
      name: 'Июнь',
      uv: 2540,
      amt: 2500,
    },
    {
      name: 'Июль',
      uv: 3390,
      amt: 2100,
    },
    {
      name: 'Август',
      uv: 3490,
      amt: 2100,
    },
    {
      name: 'Сентябрь',
      uv: 3130,
      amt: 2100,
    },
    {
      name: 'Октябрь',
      uv: 3390,
      amt: 2100,
    },
    {
      name: 'Ноябрь',
      uv: 3890,
      amt: 2100,
    },
    {
      name: 'Декабрь',
      uv: 3190,
      amt: 2100,
    },
  ]

  return (
    <ResponsiveContainer width='98%' height={450}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Line type='monotone' dataKey='uv' stroke='#9fef00' />
      </LineChart>
    </ResponsiveContainer>
  )
}
