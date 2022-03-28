import ErrorRepository from '../ErrorRepository';

test(('Проверка создания репозитория ошибок'), () => {
  const errorsBase = new ErrorRepository();
  errorsBase.errors.set(404, 'bad request');
  errorsBase.errors.set(500, 'server error');

  const expected = new Map();
  expected.set(404, 'bad request');
  expected.set(500, 'server error');

  const received = errorsBase.errors;
  expect(received).toEqual(expected);
});

test(('Проверка метода - translate()'), () => {
  const errorsBase = new ErrorRepository();
  errorsBase.errors.set(404, 'bad request');
  errorsBase.errors.set(500, 'server error');
  expect(errorsBase.translate(404)).toBe('bad request');
  expect(errorsBase.translate(500)).toBe('server error');
  expect(errorsBase.translate(501)).toBe('Unknown error');
});
