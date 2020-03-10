import { newE2EPage } from '@stencil/core/testing';

describe('vff-time-line-event', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<vff-time-line-event></vff-time-line-event>');

    const element = await page.find('vff-time-line-event');
    expect(element).toHaveClass('hydrated');
  });
});
