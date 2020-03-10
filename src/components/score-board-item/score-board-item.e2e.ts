import { newE2EPage } from '@stencil/core/testing';

describe('vff-score-board-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<vff-score-board-item></vff-score-board-item>');

    const element = await page.find('vff-score-board-item');
    expect(element).toHaveClass('hydrated');
  });
});
