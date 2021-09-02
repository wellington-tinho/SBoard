
import Modal from 'react-modal';
import { VscChromeClose } from 'react-icons/vsc'
import { Container } from './styles';

interface SetupModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}


export function SetupModal({ isOpen, onRequestClose }: SetupModalProps) {


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={'react-modal-overlay'}
      className={'react-modal-content'}
    >

      <Container >
        <VscChromeClose color="#" onClick={onRequestClose} className='react-modal-close' />
        <h2>Setup</h2>

        <div>




          <div>
            <p>Quantity VNRs</p>
            <input type="boolean" name="qtd_vnrs" id="qtd_vnrs" placeholder="default: False" />
            {/* 
             <a href="http://" title='used in VNRs_Generator.generator()'>
             <img src="" alt="icon help" /> </a>
             </a> */}
          </div>

          <div>
            <p>Low Better</p>
            <input
              id="lowBetter" type="text"
              value='' placeholder="default: False" />
            {/* <a href="/" title='in this case take with the greater Evaluation' >          
            <img src="/assets/icons/help.png" alt="icon Help" /> 
            </a> */}
          </div>

          <div>
            <p>Alfa</p>
            <input
              id="alfa" type="text"
              value='' placeholder="default: 0.5" />
            {/* <a href="/" title='used in Enviroment.__init__()' >          
            <img src="/assets/icons/help.png" alt="icon Help" /> 
            </a> */}
          </div>

          <div>
            <p>Beta</p>
            <input
              id="beta" type="text"
              value='' placeholder="default: 0.5" />
            {/* <a href="/" title='used in Enviroment.__init__()'>          
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>

          <div>
            <p>Quantity nodes</p>
            <input
              id="qtd_nodes" type="text"
              value='' placeholder="default: 200" />
            {/* <a href="/" title='used in Environment.create() Barabási parameter'>          
              <img src="/assets/icons/help.png" alt="icon Help" /> 
            </a> */}
          </div>

          <div>
            <p>Quantity virtual nodes</p>
            <input
              id="qtd_virtual_nodes" type="text"
              value='' placeholder="default: 6" />
            {/* <a href="/" title='used in VNRs_Generator'>          
            <img src="/assets/icons/help.png" alt="icon Help" /> 
            </a> */}
          </div>

          <div>
            <p>Quantity neighbours</p>
            <input
              id="qtd_neighbours" type="text"
              value='' placeholder="default: 5" />
            {/* <a href="/" title='used in Environment.create() Barabási parameter'>          
            <img src="/assets/icons/help.png" alt="icon Help" /> 
             </a> */}
          </div>

          <div>
            <p>Node capacity min</p>
            <input
              id="node_capacity_min" type="text" value='' placeholder="default: 10" />
            {/* <a href="/" title='used in Environment.create()' >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
           </a> */}
          </div>

          <div>
            <p>Node capacity max</p>
            <input
              id="node_capacity_max" type="text" value='' placeholder="default: 200" />
            {/* <a href="/" title='used in Enviroment.__init__()' >
            <img src="/assets/icons/help.png" alt="icon Help" />
            </a> */}
          </div>

          <div>
            <p>Edge capacity min</p>
            <input
              id="edge_capacity_min" type="text" value='' placeholder="default: 10" />
            {/* <a href="/" title='used in Environment.create()' >
            <img src="/assets/icons/help.png" alt="icon Help" />
            </a> */}
          </div>

          <div>

            <p>Edge capacity max</p>
            <input
              id="edge_capacity_max" type="text" value='' placeholder="default: 20" />

            {/* <a href="/" title='used in Environment.create()' >
          <img src="/assets/icons/help.png" alt="icon Help" />
           </a> */}
          </div>
          <div>

            <p>first population attempt</p>

            <input
              id="first_population_attempt" type="text" value='' placeholder="default:  4" />

            {/* <a href="/" title='used in Embedding_GA.first_population' >
          <img src="/assets/icons/help.png" alt="icon Help" />
           </a> */}
          </div>
          <div>

            <p>core_bandwidth</p>

            <input
              id="core_bandwidth" type="text" value='' placeholder="default:  10000	= 10Gbps" />

            {/* <a href="/" title='core bandwidth ' >
          <img src="/assets/icons/help.png" alt="icon Help" />
           </a> */}
          </div>
          <div>

            <p>bandwidths</p>
            <input
              id="bandwidths" type="text" value='' placeholder="default:  [10 100 1000]" />

            {/* <a href="/" title='used in VNRs_Generator.generator()' >
          <img src="/assets/icons/help.png" alt="icon Help" />
           </a> */}
          </div>
          <div>

            <p>mutation limit</p>
            <input
              id="mutation_limit" type="text" value='' placeholder="default:	0.02" />

            {/* <a href="/" title='used in Embedding.__init__() - Estava 0.02' >
          <img src="/assets/icons/help.png" alt="icon Help" />
           </a> */}
          </div>
          <div>

            <p>approach</p>
            <input
              id="approach" type="text" value='' placeholder="default:  2" />

            {/* <a href="/" title='used in main.run()' >
          <img src="/assets/icons/help.png" alt="icon Help" />
           </a> */}
          </div>
          <div>

            <p>step</p>
            <input
              id="step" type="text" value='' placeholder="default:  1" />

            {/* <a href="/" title='used in main.__main__()' >
          <img src="/assets/icons/help.png" alt="icon Help" />
           </a> */}
          </div>
          <div>

            <p>ga repetition</p>
            <input
              id="ga_repetition" type="text" value='' placeholder="default:  10" />

            {/* <a href="/" title='used in Main.run()' >
          <img src="/assets/icons/help.png" alt="icon Help" />
           </a> */}
          </div>
          <div>

            <p>simulator repetition</p>


            <input
              id="simulator_repetition" type="text" value='' placeholder="default:  5" />

            {/* <a href="/" title='' >
          <img src="/assets/icons/help.png" alt="icon Help" />
           </a> */}
          </div>
          <div>

            <p>population size</p>

            <input
              id="population_size" type="text" value='' placeholder="default:  5" />

            {/* <a href="/" title='used in main.__main__()' >
          <img src="/assets/icons/help.png" alt="icon Help" />
           </a> */}
          </div>
          <div>

            <p>quantity domains</p>
            <input
              id="quantity_domains" type="text" value='' placeholder="default:  3" />

            {/* <a href="/" title='used in VNRs_Generator.generator()' >
          <img src="/assets/icons/help.png" alt="icon Help" />
           </a> */}
          </div>
          <div>

            <p>vnr durations</p>
            <input
              id="vnr_durations" type="text" value='' placeholder="default:  500" />

            {/* <a href="/" title='used in VNRs_Generator.generator()' >
          <img src="/assets/icons/help.png" alt="icon Help" />
           </a> */}
          </div>
          <div>

            <p>amount demanded</p>
            <input
              id="amount_demanded" type="text" value='' placeholder="default:  (1050)" />

            {/* <a href="/" title='(min max) - used in VNRs_Generator.generator()' >
          <img src="/assets/icons/help.png" alt="icon Help" />
           </a> */}
          </div>
          <div>

            <p>file domain</p>
            <input
              id="file_domain" type="text" value='' placeholder="default:  config/domains.json" />

            {/* <a href="/" title='used in Environment.create()' >
          <img src="/assets/icons/help.png" alt="icon Help" />
           </a> */}
          </div>
          <div>

            <p>distribution filename</p>


            <input
              id="distribution_filename" type="text" value='' placeholder="default:  config/distribution_services_nodes.json" />

            {/* <a href="/" title='' >
          <img src="/assets/icons/help.png" alt="icon Help" />
           </a> */}
          </div>
          <div>

            <p>ga prefix files</p>

            <input
              id="ga_prefix_files" type="text" value='' placeholder="default:  results/ga_results" />

            {/* <a href="/" title='used in Environment_GA' >
          <img src="/assets/icons/help.png" alt="icon Help" />
           </a> */}
          </div>

          <div>

            <p>ga prefix result file</p>


            <input
              id="ga_prefix_result_file" type="text" value='' placeholder="default:  results/ga_results/Mapping_Results_" />

            {/* <a href="/" title='used in Environment_GA save_results()' >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>

          <div>

            <p>ga file vnr not created</p>
            <input
              id="ga_file_vnr_not_created" type="text" value='' placeholder="default:  results/ga_results/vnrs_not_created.json" />

            {/* <a href="/" title='used in main.__main__()' >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>

          <div>
            <p>de prefix files</p>

            <input
              id="de_prefix_files" type="text" value='' placeholder="default:  results/de_results/" />

            {/* <a href="/" title="used in Environment_DE" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>

          <div>
            <p>de prefix result file</p>

            <input
              id="de_prefix_result_file" type="text" value='' placeholder="default:  results/de_results/Mapping_Results_" />

            {/* <a href="/" title="used in Environment_DE" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>

          <div>
            <p>de file vnr not created</p>
            <input
              id="de_file_vnr_not_created" type="text" value='' placeholder="default: results/de_results/vnrs_not_created.json" />

            {/* <a href="/" title="used in Environment_DE" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>

          <div>
            <p>stress prefix files</p>

            <input
              id="stress_prefix_files" type="text" value='' placeholder="default: results/stress_results/" />

            {/* <a href="/" title="used in Environment_Stress" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>

          <p>stress prefix result file</p>
          <div>

            <input
              id="stress_prefix_result_file" type="text" value='' placeholder="default: results/stress_nodes_results/Mapping_Results_" />

            {/* <a href="/" title="used in Environment_Stress" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>

          <div>
            <p>stress file vnr not created</p>
            <input
              id="stress_file_vnr_not_created" type="text" value='' placeholder="default:  results/stress_nodes_results/vnrs_not_created.json" />

            {/* <a href="/" title="used in Environment_Stress" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}

          </div>
          <div>


            <p>greedy prefix files</p>
            <input
              id="greedy_prefix_files" type="text" value='' placeholder="default:  results/greedy_results/" />

            {/* <a href="/" title="used in Environment_Greedy" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>
          <div>

            <p>greedy prefix result file</p>
            <input
              id="greedy_prefix_result_file" type="text" value='' placeholder="default:  results/greedy_edges_results/Mapping_Results_" />
            {/* <a href="/" title="used in Environment_Greedy" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>

          <div>


            <p>greedy_file_vnr_not_created</p>
            <input
              id="greedy_file_vnr_not_created" type="text" value='' placeholder="default:  results/greedy_edges_results/vnrs_not_created.json" />

            {/* <a href="/" title="used in Environment_Greedy" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>

          <div>


            <p>time_to_create_a_slice</p>

            <input
              id="time_to_create_a_slice" type="text" value='' placeholder="default: 1" />

            {/* <a href="/" title="used in Domains by Domains_Generator" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>
          <div>

            <p>limit_max_bandwidth</p>

            <input
              id="limit_max_bandwidth" type="text" value='' placeholder="default: 100000 " />

            {/* <a href="/" title="it must be greater than core_bandwidth" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>

          <div>

            <p>path_approach</p>
            <input
              id="path_approach" type="text" value='' placeholder="default:  2" />

            {/* <a href="/" title="" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>
          <div>

            <p>quantity_services</p>
            <input
              id="quantity_services" type="text" value='' placeholder="default:  5" />

            {/* <a href="/" title="used in Environment.py in create_services method" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>
          <div>

            <p>quantity_max_functions</p>


            <input
              id="quantity_max_functions" type="text" value='' placeholder="default:  10 " />

            {/* <a href="/" title="used in Environment.py in create_services method" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>
          <div>

            <p>quantity_max_pkts</p>

            <input
              id="quantity_max_pkts" type="text" value='' placeholder="default:  1000 " />

            {/* <a href="/" title="a function can at must delay 100pkts/time_unit" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>
          <div>

            <p>file_services</p>
            <input
              id="file_services" type="text" value='' placeholder="default:  config/services.json" />

            {/* <a href="/" title="" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>
          <div>

            <p>file_functions</p>
            <input
              id="file_functions" type="text" value='' placeholder="default:  config/functions.json" />

            {/* <a href="/" title="" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>
          <div>

            <p>MTU</p>
            <input
              id="MTU" type="text" value='' placeholder="default:  1500" />

            {/* <a href="/" title="" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>
          <div>

            <p>DE_C</p>
            <input
              id="DE_C" type="text" value='' placeholder="default:  1" />

            {/* <a href="/" title="(0.9 valor usado nos testes) used in DE/Embedding_DE (it means the probability C see DE algorithm)" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>
          <div>

            <p>DE_F</p>
            <input
              id="DE_F" type="text" value='' placeholder="default: 0.25" />

            {/* <a href="/" title="(0.85 valor usado nos testes)  # used in DE/Embedding_DE (it means the Factor C see DE algorithm)" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}

          </div>
          <div>

            <p>link_delay_min </p>

            <input
              id="link_delay_min" type="text" value='' placeholder="default: 10" />

            {/* <a href="/" title="Used in Environment.py to create the links by first time" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>
          <div>

            <p>link_delay_max </p>
            <input
              id="link_delay_max" type="text" value='' placeholder="default: 100" />

            {/* <a href="/" title="Used in Environment.py to create the links by first time" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>
          <div>

            <p>link_relibility_min</p>
            <input
              id="link_relibility_min" type="text" value='' placeholder="default: 90" />

            {/* <a href="/" title="Used in Environment.py to create the links by first time" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>
          <div>

            <p>link_relibility_max</p>
            <input
              id="link_relibility_max" type="text" value='' placeholder="default: 99" />

            {/* <a href="/" title="Used in Environment.py to create the links by first time" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>
          <div>

            <p>types_slice</p>
            <input
              id="types_slice" type="text" value='' placeholder="default: ['mmtc' 'urllc' 'embb']" />

            {/* <a href="/" title="" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>
          <div>

            <p>de_coefficients </p>
            <input
              id="de_coefficients" type="text" value='' placeholder="default: {'mmtc': [1 0 0] 'urllc': [1 0 0] 'embb': [1 0 0]}" />

            {/* <a href="/" title="" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
            </a> */}
          </div>

          <div>
            <p>hop_coefficients </p>
            <input
              id="hop_coefficients" type="text" value='' placeholder="default: 1" />
            {/* <a href="/" title="0: not regard; 1 regard" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
            </a> */}
          </div>

          <div>
            <p>remove_vnr_not_mapped </p>
            <input
              id="remove_vnr_not_mapped" type="text" value='' placeholder="default: True" />
            {/* <a href="/" title="" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
           </a> */}
          </div>

          <button type="submit">
            Enviar Dados
          </button>




        </div>
      </Container>
    </Modal>
  );
}