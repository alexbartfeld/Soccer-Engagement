import { newE2EPage } from '@stencil/core/testing';

describe('vff-formation', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<vff-formation></vff-formation>');

    const element = await page.find('vff-formation');
    expect(element).toHaveClass('hydrated');
  });
});
