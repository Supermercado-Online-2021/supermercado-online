
import TemplateAccount from "../../templates/TemplateAccount";
import FormUser from '../../components/FormUser';

import connector, { Props } from './connector';



function AccountUserUpdate({ user }: Props) {
    return(
        <TemplateAccount title="Dados pessoais" subtitle="Atualizar dados cadastrais">
            <FormUser />
        </TemplateAccount>
    );
}

export default connector(AccountUserUpdate);
