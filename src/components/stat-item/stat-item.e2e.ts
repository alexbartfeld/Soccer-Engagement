import { newE2EPage } from '@stencil/core/testing';

describe('vff-stat-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<vff-stat-item></vff-stat-item>');

    const element = await page.find('vff-stat-item');
    expect(element).toHaveClass('hydrated');
  });
});
