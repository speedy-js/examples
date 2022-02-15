import React from 'react';

export interface AppProps {
  abbreviation: string;
  client_ip: string;
  datetime: Date;
  day_of_week: number;
  day_of_year: number;
  dst: boolean;
  dst_from: null;
  dst_offset: number;
  dst_until: null;
  raw_offset: number;
  timezone: string;
  unixtime: number;
  utc_datetime: Date;
  utc_offset: string;
  week_number: number;
}

export const App: React.FC<AppProps> = (props) => {
  return (
    <div>
      <h1>Hello, Speedy SSR</h1>
      <h2>Props:</h2>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};
