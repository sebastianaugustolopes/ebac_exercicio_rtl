// Post.test.tsx

import { render, screen, fireEvent } from '@testing-library/react';
import Post from './index';

describe('Post component', () => {
  it('permite inserir dois comentários', () => {
    render(<Post imageUrl="https://example.com/image.jpg">Exemplo de post</Post>);

    const input = screen.getByTestId('comment-input') as HTMLTextAreaElement;
    const button = screen.getByTestId('submit-button');

    fireEvent.change(input, { target: { value: 'Primeiro comentário' } });
    fireEvent.click(button);

    fireEvent.change(input, { target: { value: 'Segundo comentário' } });
    fireEvent.click(button);

    const comentarios = screen.getAllByTestId('comment');
    expect(comentarios).toHaveLength(2);
    expect(comentarios[0].textContent).toBe('Primeiro comentário');
    expect(comentarios[1].textContent).toBe('Segundo comentário');
  });
});
