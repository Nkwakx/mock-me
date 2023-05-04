import AccountContext, { MyProvider } from "../context/AccountContext";


export default function AccountState(props: any) {
      return (
            <MyProvider value={{}}>
                  {props.children}
            </MyProvider>
      )
}
