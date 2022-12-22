# !!! WIP: Waiting on Spacetime 7.4.0

# chartjs-adapter-spacetime
![npm](https://img.shields.io/npm/v/chartjs-adapter-spacetime?style=flat-square)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/chartjs-adapter-spacetime/peer/chart.js?style=flat-square)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/chartjs-adapter-spacetime/peer/spacetime?style=flat-square)

## Spacetime support for Chart.js' TimeScale plugin.

```bash
$ npm install --save spacetime chartjs-adapter-spacetime
```

```ts
import {
  Chart as ChartJS,
  TimeScale,
} from 'chart.js'

import "chartjs-adapter-spacetime";

ChartJS.register(TimeScale)
```

When providing your own formats via [Chart.JS options](https://www.chartjs.org/docs/latest/axes/cartesian/time.html#configuration-options), use Spacetime's [unixFmt options](https://github.com/spencermountain/spacetime/blob/master/src/methods/format/unixFmt.js).
