import { newE2EPage } from '@stencil/core/testing';

describe('vff-score-board', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<vff-score-board></vff-score-board>');

    const element = await page.find('vff-score-board');
    expect(element).toHaveClass('hydrated');
  });
});
