# !!! WIP: Waiting on Spacetime 7.4.0
This project relies on a couple components of the Spacetime library that are currently missing. These won't cause crashes, but could affect output. See [[1]](https://github.com/spencermountain/spacetime/pull/359) [[2]](https://github.com/spencermountain/spacetime/pull/360)

# chartjs-adapter-spacetime
[![npm](https://img.shields.io/npm/v/chartjs-adapter-spacetime?style=flat-square)](https://www.npmjs.com/package/chartjs-adapter-spacetime)
[![npm peer dependency version](https://img.shields.io/npm/dependency-version/chartjs-adapter-spacetime/peer/chart.js?style=flat-square)](https://www.npmjs.com/package/spacetime)
[![npm peer dependency version](https://img.shields.io/npm/dependency-version/chartjs-adapter-spacetime/peer/spacetime?style=flat-square)](https://www.npmjs.com/package/chart.js)

## Spacetime support for Chart.js' TimeScale plugin.

```bash
$ npm install spacetime chartjs-adapter-spacetime

$ yarn add spacetime chartjs-adapter-spacetime

$ pnpm add spacetime chartjs-adapter-spacetime
```

```ts
import {
  Chart as ChartJS,
  TimeScale,
} from 'chart.js'

import "chartjs-adapter-spacetime";

ChartJS.register(TimeScale)
```

When providing your own formats via [Chart.JS options](https://www.chartjs.org/docs/latest/axes/cartesian/time.html#configuration-options), use Spacetime's [unixFmt options](https://github.com/spencermountain/spacetime/blob/master/src/methods/format/unixFmt.js). Localization is not currently supported.

Some portions of this project are based on [chartjs-adapter-luxon](https://www.github.com/chartjs/chartjs-adapter-luxon).
