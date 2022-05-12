import { render, screen,fireEvent } from '@testing-library/react';
import MyForm from './myform';



describe("testing UI",()=>{
    it("first test case",()=>{
        render(<MyForm/>)
        expect(screen.getByTestId('usernamelbl').textContent).toBe("enter user name")
        expect(screen.getByTestId('passwordlbl').textContent).toBe("enter password")

        fireEvent.change(screen.getByTestId('username'),{target:{value:'vinod'}})

        fireEvent.change(screen.getByTestId('passwrd'),{target:{value:'vinod123'}})

        fireEvent.click(screen.getByTestId('submitctrl'))

        expect(screen.getByTestId('msglbl').textContent).toBe("valid user")

        fireEvent.change(screen.getByTestId('username'),{target:{value:'vinod'}})

        fireEvent.change(screen.getByTestId('passwrd'),{target:{value:'vinod12345'}})

        fireEvent.click(screen.getByTestId('submitctrl'))

        expect(screen.getByTestId('msglbl').textContent).toBe("invalid user")
    })
})