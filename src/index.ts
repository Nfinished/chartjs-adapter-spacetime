import { DateAdapter, _adapters } from 'chart.js'
import adapter from './adapter'

// Spacetime ParsableDate is a union of Date, number, string, and object.
// It's compatible with the DateAdapter interface, but this is easier than arguing.
_adapters._date.override(adapter as unknown as DateAdapter)
