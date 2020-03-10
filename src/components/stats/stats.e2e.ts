import { newE2EPage } from '@stencil/core/testing';

describe('vff-stats', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<vff-stats></vff-stats>');

    const element = await page.find('vff-stats');
    expect(element).toHaveClass('hydrated');
  });
});
