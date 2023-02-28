import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Cell } from 'recharts'

export const ChartPie = () => {
  const [loaded, setLoaded] = useState<boolean>(false)
  const data = [
    { name: 'Group A', value: 900 },
    { name: 'Group B', value: 400 },
    { name: 'Group C', value: 250 },
  ]
  const COLORS = ['#0086FF', '#9FEF00', '#FF3E3E']

  useEffect(() => {
    setLoaded(true)
  }, [])

  if (!loaded) {
    return null
  }

  return (
    <PieChart width={250} height={250}>
      <Pie
        data={data}
        cx={100}
        cy={130}
        innerRadius={60}
        outerRadius={80}
        dataKey='value'
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  )
}
