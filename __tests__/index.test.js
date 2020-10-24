import example from '../__fixtures__/example';
import parse from '../src';

it('works', async () => {
  expect(parse(example.data._meta)).toMatchSnapshot();
});
