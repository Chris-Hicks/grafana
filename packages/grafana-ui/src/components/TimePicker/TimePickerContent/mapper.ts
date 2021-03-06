import { TimeOption, TimeRange, TimeZone, rangeUtil, dateTimeFormat, dateTimeFormatISO } from '@grafana/data';

export const mapOptionToTimeRange = (option: TimeOption): TimeRange => {
  return rangeUtil.convertRawToRange({ from: option.from, to: option.to });
};

export const mapRangeToTimeOption = (range: TimeRange, timeZone?: TimeZone): TimeOption => {
  const from = dateTimeFormat(range.from, { timeZone });
  const to = dateTimeFormat(range.to, { timeZone });

  return {
    from: dateTimeFormatISO(range.from, { timeZone }),
    to: dateTimeFormatISO(range.to, { timeZone }),
    section: 3,
    display: `${from} to ${to}`,
  };
};
