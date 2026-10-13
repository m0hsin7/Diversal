import { describe, expect, it } from 'vitest';
import { homes } from './homes';

describe('supplied residential projects', () => {
  it('lists all six supplied homes as under construction', () => {
    expect(homes.map(h => [h.name, h.status])).toEqual([
      ['Modern Residence', 'Under construction'], ['Residence 334', 'Under construction'],
      ['The Vista', 'Under construction'], ['Residence 999', 'Under construction'],
      ['Residence — Top City', 'Under construction'], ['Residence — Faisal Town', 'Under construction'],
    ]);
  });
  it('keeps the supplied home locations', () => {
    expect(homes.map(h => h.area)).toEqual([...Array(5).fill('Top City, Islamabad'), 'Faisal Town, Islamabad']);
  });
  it('allows pre-booking enquiries for all six construction projects', () => {
    expect(homes.map(h => h.preBookingAvailable)).toEqual([true, true, true, true, true, true]);
  });
});