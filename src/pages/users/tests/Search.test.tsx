import { fireEvent, render, screen } from "@testing-library/react";
import { simpleAction } from "../../../config/redux/utils";
import { Search } from "../Search";

describe('When using Search', () => {
  const dispatch = jest.fn();
  
  beforeEach(() => {
    dispatch.mockReset();
  })

  afterAll(() => {
    dispatch.mockRestore();
  })

  it('Should set input value to the value passed', () => {
    render(<Search searchTerm={'Test'} dispatch={dispatch} />)
    const input = screen.getByTestId('name-search') as HTMLInputElement;
    expect(input.value).toBe('Test');
  })

  it('should dispatch the entered value', () => {
    render(<Search searchTerm="" dispatch={dispatch} />)
    const input = screen.getByTestId('name-search') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '123' } });
    expect(dispatch).toHaveBeenCalledWith(simpleAction({
      type: 'USERS_SET_FILTER_TEXT',
      searchTerm: '123'
    }));
  })

})