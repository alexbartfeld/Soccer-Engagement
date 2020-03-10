import { newE2EPage } from '@stencil/core/testing';

describe('vff-time-line', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<vff-time-line></vff-time-line>');

    const element = await page.find('vff-time-line');
    expect(element).toHaveClass('hydrated');
  });
});
