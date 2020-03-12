import { newE2EPage } from '@stencil/core/testing';

describe('vff-team-line-up', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<vff-team-line-up></vff-team-line-up>');

    const element = await page.find('vff-team-line-up');
    expect(element).toHaveClass('hydrated');
  });
});
