import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RequestProvider } from '../../../context/Request/RequestContext';
import { ShowVND } from '../showVND/showVND';
import { CreateOne } from './createOneRequest';


describe('CreateRequest', () => {
it('create request with all values', async () => {
  const { getByText: getByTextCreateOne, getByPlaceholderText } = render(
    <RequestProvider>
      <CreateOne />
    </RequestProvider> 
  );
  const { getByText: getByTextShowVND, queryByText  } = render(
    <RequestProvider>
      <ShowVND />
    </RequestProvider>
  );
  

    // const submitButton = getByText('Create Request');
    const id =  getByPlaceholderText('Deixe em branco para ser gerado randomicamente')
    const created  =  getByPlaceholderText('created')
    const duration  =  getByPlaceholderText('duration')
    const period  =  getByPlaceholderText('period')
    const bandwidth  =  getByPlaceholderText('bandwidth')
    const delay  =  getByPlaceholderText('delay')
    const reliability  =  getByPlaceholderText('reliability')
    const type_slice  =  getByPlaceholderText('type_slice')
    const vnr_id  =  getByPlaceholderText('vnr_id')
    const requested_vnd  =  getByPlaceholderText('requested-vnd')
    const domain_vnd  =  getByPlaceholderText('domain-vnd')
    const region_vnd  =  getByPlaceholderText('region-vnd')
    const type_vnd  =  getByPlaceholderText('type-vnd')
    const period_vnd  =  getByPlaceholderText('period-vnd')
    const sink_vnd  =  getByPlaceholderText('sink-vnd')

    const Adicionar = getByTextCreateOne('Adicionar');
    const CreateRequest = getByTextCreateOne('Create Request');

    userEvent.type(id, '1')
    userEvent.type(created, '1')
    userEvent.type(duration, '1')
    userEvent.type(period, '1')
    userEvent.type(bandwidth, '1')
    userEvent.type(delay, '1')
    userEvent.type(reliability, '1')
    userEvent.type(type_slice, '1')
    userEvent.type(vnr_id, '1')
    userEvent.type(requested_vnd, '1')
    userEvent.type(domain_vnd, '1')
    userEvent.type(region_vnd, '1')
    userEvent.type(type_vnd, '1')
    userEvent.type(period_vnd, '1')
    userEvent.type(sink_vnd, '1')

    userEvent.click(Adicionar)
    userEvent.click(Adicionar)

    userEvent.click(CreateRequest)
    
    // rerender(
    //   <RequestProvider>
    //     <ShowVND />
    //   </RequestProvider>
    // );

    await waitFor(() => {
      expect(queryByText('Request 0')).toBeInTheDocument();
    });

  });

});