import { newE2EPage } from '@stencil/core/testing';

describe('vff-social-embed', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<vff-social-embed></vff-social-embed>');

    const element = await page.find('vff-social-embed');
    expect(element).toHaveClass('hydrated');
  });
});
