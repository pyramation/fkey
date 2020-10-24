import example from '../__fixtures__/example';
import parse from '../src';
const meta = example.data._meta;

it('works', async () => {
  expect(parse(meta)).toMatchSnapshot();
});
