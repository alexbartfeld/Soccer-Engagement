import { newE2EPage } from '@stencil/core/testing';

describe('vff-loader', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<vff-loader></vff-loader>');

    const element = await page.find('vff-loader');
    expect(element).toHaveClass('hydrated');
  });
});
