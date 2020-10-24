import circular from '../__fixtures__/circular';
import parse from '../src';

it('circular', async () => {
  expect(parse(circular.data._meta)).toMatchSnapshot();
});
