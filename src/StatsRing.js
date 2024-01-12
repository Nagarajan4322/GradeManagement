import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';

const icons = {
  up: <ArrowUpward />,
  down: <ArrowDownward />,
};

const data = [
  { label: 'Page views', stats: '456,578', progress: 65, color: 'teal', icon: 'up' },
  { label: 'New users', stats: '2,550', progress: 72, color: 'blue', icon: 'up' },
  {
    label: 'Orders',
    stats: '4,735',
    progress: 52,
    color: 'red',
    icon: 'down',
  },
];

export function StatsRing() {
  const stats = data.map((stat, index) => {
    const Icon = icons[stat.icon];
    return (
      <Grid key={index} item xs={12} sm={4}>
        <Paper elevation={3}>
          <Grid container justifyContent="center" alignItems="center" spacing={2}>
            <Grid item>
              <CircularProgress
                size={80}
                variant="determinate"
                value={stat.progress}
                thickness={8}
                sx={{ color: stat.color }}
              />
              <Typography variant="body2" color="text.secondary" textAlign="center">
                {Icon}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" sx={{ textTransform: 'uppercase', fontWeight: 700 }}>
                {stat.label}
              </Typography>
              <Typography variant="h6" fontWeight={700}>
                {stat.stats}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  });

  return (
    <Grid container spacing={2}>
      {stats}
    </Grid>
  );
}
