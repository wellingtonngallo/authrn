interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  }
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'testa4343fdf',
        user: {
          name: 'Gallo',
          email: 'wellinton.gallo77@gmail.com'
        }
      })
    }, 2000)
  });
}