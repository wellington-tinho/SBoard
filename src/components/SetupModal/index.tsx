import { FormEvent, useRef, useState } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import arqSetupJson from '../../data/setup.json';
import { api } from '../../services/api';
import { Container } from './styles';





interface SetupModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}


function SetupModal({ isOpen, onRequestClose }: SetupModalProps) {
  const [data, setData] = useState(arqSetupJson)

  const [qtd_vnrs, set_qtd_vnrs] = useState(data.qtd_vnrs)
  const [lowBetter, set_lowBetter] = useState(String(data.lowBetter))
  const [alfa, set_alfa] = useState(data.alfa)
  const [beta, set_beta] = useState(data.beta)
  const [qtd_nodes, set_qtd_nodes] = useState(data.qtd_nodes)
  const [qtd_virtual_nodes, set_qtd_virtual_nodes] = useState(data.qtd_virtual_nodes)
  const [qtd_neighbours, set_qtd_neighbours] = useState(data.qtd_neighbours)
  const [node_capacity_min, set_node_capacity_min] = useState(data.node_capacity_min)
  const [node_capacity_max, set_node_capacity_max] = useState(data.node_capacity_max)
  const [edge_capacity_min, set_edge_capacity_min] = useState(data.edge_capacity_min)
  const [edge_capacity_max, set_edge_capacity_max] = useState(data.edge_capacity_max)
  const [first_population_attempt, set_first_population_attempt] = useState(data.first_population_attempt)
  const [core_bandwidth, set_core_bandwidth] = useState(data.core_bandwidth)
  const [bandwidths, set_bandwidths] = useState(String(data.bandwidths))
  const [mutation_limit, set_mutation_limit] = useState(data.mutation_limit)
  const [approach, set_approach] = useState(data.approach)
  const [step, set_step] = useState(data.step)
  const [ga_repetition, set_ga_repetition] = useState(data.ga_repetition)
  const [simulator_repetition, set_simulator_repetition] = useState(data.simulator_repetition)
  const [population_size, set_population_size] = useState(data.population_size)
  const [quantity_domains, set_quantity_domains] = useState(data.quantity_domains)
  const [vnr_durations, set_vnr_durations] = useState(data.vnr_durations)
  const [amount_demanded, set_amount_demanded] = useState(String(data.amount_demanded))
  const [file_domain, set_file_domain] = useState(data.file_domain)
  const [distribution_filename, set_distribution_filename] = useState(data.distribution_filename)
  const [ga_prefix_files, set_ga_prefix_files] = useState(data.ga_prefix_files)
  const [ga_prefix_result_file, set_ga_prefix_result_file] = useState(data.ga_prefix_result_file)
  const [ga_file_vnr_not_created, set_ga_file_vnr_not_created] = useState(data.ga_file_vnr_not_created)
  const [de_prefix_files, set_de_prefix_files] = useState(data.de_prefix_files)
  const [de_prefix_result_file, set_de_prefix_result_file] = useState(data.de_prefix_result_file)
  const [de_file_vnr_not_created, set_de_file_vnr_not_created] = useState(data.de_file_vnr_not_created)
  const [stress_prefix_files, set_stress_prefix_files] = useState(data.stress_prefix_files)
  const [stress_prefix_result_file, set_stress_prefix_result_file] = useState(data.stress_prefix_result_file)
  const [stress_file_vnr_not_created, set_stress_file_vnr_not_created] = useState(data.stress_file_vnr_not_created)
  const [greedy_prefix_files, set_greedy_prefix_files] = useState(data.greedy_prefix_files)
  const [greedy_prefix_result_file, set_greedy_prefix_result_file] = useState(data.greedy_prefix_result_file)
  const [greedy_file_vnr_not_created, set_greedy_file_vnr_not_created] = useState(data.greedy_file_vnr_not_created)
  const [time_to_create_a_slice, set_time_to_create_a_slice] = useState(data.time_to_create_a_slice)
  const [limit_max_bandwidth, set_limit_max_bandwidth] = useState(data.limit_max_bandwidth)
  const [path_approach, set_path_approach] = useState(data.path_approach)
  const [quantity_services, set_quantity_services] = useState(data.quantity_services)
  const [quantity_max_functions, set_quantity_max_functions] = useState(data.quantity_max_functions)
  const [quantity_max_pkts, set_quantity_max_pkts] = useState(data.quantity_max_pkts)
  const [file_services, set_file_services] = useState(data.file_services)
  const [file_functions, set_file_functions] = useState(data.file_functions)
  const [MTU, set_MTU] = useState(data.MTU)
  const [DE_C, set_DE_C] = useState(data.DE_C)
  const [DE_F, set_DE_F] = useState(data.DE_F)
  const [link_delay_min, set_link_delay_min] = useState(data.link_delay_min)
  const [link_delay_max, set_link_delay_max] = useState(data.link_delay_max)
  const [link_relibility_min, set_link_relibility_min] = useState(data.link_relibility_min)
  const [link_relibility_max, set_link_relibility_max] = useState(data.link_relibility_max)
  const [types_slice, set_types_slice] = useState(data.types_slice)
  const [de_coefficients, set_de_coefficients] = useState(data.de_coefficients)
  const [hop_coefficients, set_hop_coefficients] = useState(data.hop_coefficients)
  const [remove_vnr_not_mapped, set_remove_vnr_not_mapped] = useState(String(data.remove_vnr_not_mapped))


  const initialRender = useRef(true);


  


  function handleCreateNewSetup(event:FormEvent) {
    event.preventDefault();

    const data = {
      'qtd_vnrs':qtd_vnrs,
      'lowBetter':  (String(lowBetter).toLowerCase() === "true"),
      'alfa':alfa,
      'beta':beta,
      'qtd_nodes':qtd_nodes,
      'qtd_virtual_nodes':qtd_virtual_nodes,
      'qtd_neighbours':qtd_neighbours,
      'node_capacity_min':node_capacity_min,
      'node_capacity_max':node_capacity_max,
      'edge_capacity_min':edge_capacity_min,
      'edge_capacity_max':edge_capacity_max,
      'first_population_attempt':first_population_attempt,
      'core_bandwidth':core_bandwidth,
      'bandwidths':bandwidths.split(',').map(Number),
      'mutation_limit':mutation_limit,
      'approach':approach,
      'step':step,
      'ga_repetition':ga_repetition,
      'simulator_repetition':simulator_repetition,
      'population_size':population_size,
      'quantity_domains':quantity_domains,
      'vnr_durations':vnr_durations,
      'amount_demanded':amount_demanded.split(',').map(Number),
      'file_domain':file_domain,
      'distribution_filename':distribution_filename,
      'ga_prefix_files':ga_prefix_files,
      'ga_prefix_result_file':ga_prefix_result_file,
      'ga_file_vnr_not_created':ga_file_vnr_not_created,
      'de_prefix_files':de_prefix_files,
      'de_prefix_result_file':de_prefix_result_file,
      'de_file_vnr_not_created':de_file_vnr_not_created,
      'stress_prefix_files':stress_prefix_files,
      'stress_prefix_result_file':stress_prefix_result_file,
      'stress_file_vnr_not_created':stress_file_vnr_not_created,
      'greedy_prefix_files':greedy_prefix_files,
      'greedy_prefix_result_file':greedy_prefix_result_file,
      'greedy_file_vnr_not_created':greedy_file_vnr_not_created,
      'time_to_create_a_slice':time_to_create_a_slice,
      'limit_max_bandwidth':limit_max_bandwidth,
      'path_approach':path_approach,
      'quantity_services':quantity_services,
      'quantity_max_functions':quantity_max_functions,
      'quantity_max_pkts':quantity_max_pkts,
      'file_services':file_services,
      'file_functions':file_functions,
      'MTU':MTU,
      'DE_C':DE_C,
      'DE_F':DE_F,
      'link_delay_min':link_delay_min,
      'link_delay_max':link_delay_max,
      'link_relibility_min':link_relibility_min,
      'link_relibility_max':link_relibility_max,
      'types_slice':types_slice,
      'de_coefficients':de_coefficients,
      'hop_coefficients':hop_coefficients,
      'remove_vnr_not_mapped':(String(remove_vnr_not_mapped).toLowerCase() === "true")
    };

    setData(data);
    toast.success('Setup created successfully!');
    updateSetup(data)
    
  }

  async function updateSetup(data:any){
    await api.post('setup', {data: data})
  }

 
  // useEffect(() => {
  //   if (initialRender.current) {
  //     initialRender.current = false;
  //   } else {
  //     api.post('setup', {data: data})
  //   }
  //   console.log('loop');
    
  // },[data]); //esta em loop esse useEffect

 

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={'react-modal-overlay'}
      className={'react-modal-content'}
    >

      <Container onSubmit={handleCreateNewSetup}>
        <VscChromeClose  onClick={onRequestClose} className='react-modal-close' />
        <h2>Setup</h2>

        <div>
          <div>
            <p>Quantity VNRs</p>
            <input 
              onChange={
                event => set_qtd_vnrs( Number(event.target.value) )
                } 
                type="number" name="qtd_vnrs" 
                
                 id="qtd_vnrs" 
                placeholder={String(qtd_vnrs)} />
            {/* 
             <a href="http://" title='used in VNRs_Generator.generator()'>
             <img src="" alt="icon help" /> </a>
             </a> */}
          </div>

          <div>
            <p>Low Better</p>
            <input 
              onChange={
                event => set_lowBetter(event.target.value)
              }
             
               id="lowBetter" 
              type="text"
              placeholder={String(lowBetter)} 
            />
            {/* <a href="/" title='in this case take with the greater Evaluation' >          
            <img src="/assets/icons/help.png" alt="icon Help" /> 
            </a> */}
          </div>

          <div>
            <p>Alfa</p>
            <input 
              onChange={
                event => set_alfa(Number(event.target.value))}
              
               id="alfa" type="number"
              placeholder={String(alfa)}
            />
            {/* <a href="/" title='used in Enviroment.__init__()' >          
            <img src="/assets/icons/help.png" alt="icon Help" /> 
            </a> */}
          </div>

          <div>
            <p>Beta</p>
            <input 
              onChange={
                event => set_beta(Number(event.target.value))}
              
               id="beta" type="number"
              placeholder={String(beta)} 
            />
            {/* <a href="/" title='used in Enviroment.__init__()'>          
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>

          <div>
            <p>Quantity nodes</p>
            <input 
              onChange={
                event => set_qtd_nodes(Number(event.target.value))}
              
               id="qtd_nodes" type="number"
              placeholder={String(qtd_nodes)} 
            />
            {/* <a href="/" title='used in Environment.create() Barabási parameter'>          
              <img src="/assets/icons/help.png" alt="icon Help" /> 
            </a> */}
          </div>

          <div>
            <p>Quantity virtual nodes</p>
            <input 
              onChange={
                event => set_qtd_virtual_nodes(Number(event.target.value))}
              
               id="qtd_virtual_nodes" type="number"
              placeholder={String(qtd_virtual_nodes)} 
            />
            {/* <a href="/" title='used in VNRs_Generator'>          
            <img src="/assets/icons/help.png" alt="icon Help" /> 
            </a> */}
          </div>

          <div>
            <p>Quantity neighbours</p>
            <input 
              onChange={
                event => set_qtd_neighbours(Number(event.target.value))}
              
               id="qtd_neighbours" type="number"
              placeholder={String(qtd_neighbours)} />
            {/* <a href="/" title='used in Environment.create() Barabási parameter'>          
            <img src="/assets/icons/help.png" alt="icon Help" /> 
             </a> */}
          </div>

          <div>
            <p>Node capacity min</p>
            <input 
              onChange={
                event => set_node_capacity_min(Number(event.target.value))
              }
              
             
              id="node_capacity_min" 
              type="number" 
              placeholder={String(node_capacity_min)} />
              {/* <a href="/" title='used in Environment.create()' >
                <img src="/assets/icons/help.png" alt="icon Help" /> 
              </a> */}
          </div>

          <div>
            <p>Node capacity max</p>
            <input 
              
                onChange={
                event => set_node_capacity_max(Number(event.target.value))
              }
              
             
              id="node_capacity_max" type="number" 
              placeholder={String(node_capacity_max)} />
            {/* <a href="/" title='used in Enviroment.__init__()' >
            <img src="/assets/icons/help.png" alt="icon Help" />
            </a> */}
          </div>

          <div>
            <p>Edge capacity min</p>
            <input 
              onChange={
                event => set_edge_capacity_min(Number(event.target.value))
              }
              
             
              id="edge_capacity_min" 
              type="number" placeholder={String(edge_capacity_min)} />
              {/* <a href="/" title='used in Environment.create()' >
              <img src="/assets/icons/help.png" alt="icon Help" />
              </a> */}
          </div>

          <div>

            <p>Edge capacity max</p>
            <input 
              onChange={
                event => set_edge_capacity_max(Number(event.target.value))
              }
              
             
              id="edge_capacity_max" 
              type="number" 
              placeholder={String(edge_capacity_max)} />
            {/* <a href="/" title='used in Environment.create()' >
            <img src="/assets/icons/help.png" alt="icon Help" />
            </a> */}
          </div>
          
          <div>
            <p>first population attempt</p>
            <input 
              onChange={
                event => set_first_population_attempt(Number(event.target.value))
              }
              
             
              id="first_population_attempt" 
              type="number" 
              placeholder={String(first_population_attempt)} />
            {/* <a href="/" title='used in Embedding_GA.first_population' >
            <img src="/assets/icons/help.png" alt="icon Help" />
            </a> */}
          </div>

          <div>
            <p>core_bandwidth</p>
            <input 
              onChange={
                event => set_core_bandwidth(Number(event.target.value))
              }
              
             
              id="core_bandwidth" 
              type="number" 
              placeholder={String(core_bandwidth)} />
            {/* <a href="/" title='core bandwidth ' >
          <img src="/assets/icons/help.png" alt="icon Help" />
           </a> */}
          </div>

          <div>
            <p>bandwidths</p>
            <input 
              onChange={
                event => set_bandwidths(
                  (event.target.value)
                  )
              }
              
             
              id="bandwidths" 
              type="text" 
              placeholder={String(bandwidths)} />
            {/* <a href="/" title='used in VNRs_Generator.generator()' >
          <img src="/assets/icons/help.png" alt="icon Help" />
           </a> */}
          </div>

          <div>
            <p>mutation limit</p>
            <input 
              onChange={
                event => set_mutation_limit(Number(event.target.value))
              }
              
             
              id="mutation_limit" 
              type="number" 
              placeholder={String(mutation_limit)} 
            />
            {/* <a href="/" title='used in Embedding.__init__() - Estava 0.02' >
            <img src="/assets/icons/help.png" alt="icon Help" />
            </a> */}
          </div>

          <div>

            <p>approach</p>
            <input 
              onChange={
                event => set_approach(Number(event.target.value))}
              
               id="approach" type="number" placeholder={String(approach)} />

            {/* <a href="/" title='used in main.run()' >
          <img src="/assets/icons/help.png" alt="icon Help" />
           </a> */}
          </div>
          <div>

            <p>step</p>
            <input 
              onChange={
                event => set_step(Number(event.target.value))}
              
               id="step" type="number" placeholder={String(step)} />

            {/* <a href="/" title='used in main.__main__()' >
          <img src="/assets/icons/help.png" alt="icon Help" />
           </a> */}
          </div>
          <div>

            <p>ga repetition</p>
            <input 
              onChange={
                event => set_ga_repetition(Number(event.target.value))}
              
               id="ga_repetition" type="number" placeholder={String(ga_repetition)} />

            {/* <a href="/" title='used in Main.run()' >
          <img src="/assets/icons/help.png" alt="icon Help" />
           </a> */}
          </div>
          <div>

            <p>simulator repetition</p>


            <input 
              onChange={
                event => set_simulator_repetition(Number(event.target.value))}
              
               id="simulator_repetition" type="number" placeholder={String(simulator_repetition)} />

            {/* <a href="/" title='' >
          <img src="/assets/icons/help.png" alt="icon Help" />
           </a> */}
          </div>
          <div>

            <p>population size</p>

            <input 
              onChange={
                event => set_population_size(Number(event.target.value))}
              
               id="population_size" type="number" placeholder={String(population_size)} />

            {/* <a href="/" title='used in main.__main__()' >
          <img src="/assets/icons/help.png" alt="icon Help" />
           </a> */}
          </div>
          <div>

            <p>quantity domains</p>
            <input 
              onChange={
                event => set_quantity_domains(Number(event.target.value))}
              
               id="quantity_domains" type="number" placeholder={String(quantity_domains)} />

            {/* <a href="/" title='used in VNRs_Generator.generator()' >
          <img src="/assets/icons/help.png" alt="icon Help" />
           </a> */}
          </div>
          <div>

            <p>vnr durations</p>
            <input 
              onChange={
                event => set_vnr_durations(Number(event.target.value))}
              
               id="vnr_durations" type="number" placeholder={String(vnr_durations)} />

            {/* <a href="/" title='used in VNRs_Generator.generator()' >
          <img src="/assets/icons/help.png" alt="icon Help" />
           </a> */}
          </div>
          <div>

            <p>amount demanded</p>
            <input 
              onChange={
                event => set_amount_demanded(
                  (event.target.value)
                )
              }
              
             
              id="amount_demanded" 
              type="text"  
              placeholder={String(amount_demanded)} 
            />
            {/* <a href="/" title='(min max) - used in VNRs_Generator.generator()' >
            <img src="/assets/icons/help.png" alt="icon Help" />
           </a> */}
          </div>

          <div>
            <p>file domain</p>
            <input 
              onChange={
                event => set_file_domain(event.target.value)
              }
                
               
                id="file_domain" 
                type="text" 
                placeholder={String(file_domain)} 
            />
    
            {/* <a href="/" title='used in Environment.create()' >
              <img src="/assets/icons/help.png" alt="icon Help" />
              </a> */}
          </div>
          <div>

            <p>distribution filename</p>


            <input 
              onChange={
                event => set_distribution_filename(event.target.value)}
              
               id="distribution_filename" type="text" placeholder={String(distribution_filename)} />

            {/* <a href="/" title='' >
          <img src="/assets/icons/help.png" alt="icon Help" />
           </a> */}
          </div>
          <div>

            <p>ga prefix files</p>

            <input 
              onChange={
                event => set_ga_prefix_files(event.target.value)}
              
               id="ga_prefix_files" type="text" placeholder={String(ga_prefix_files)} />

            {/* <a href="/" title='used in Environment_GA' >
          <img src="/assets/icons/help.png" alt="icon Help" />
           </a> */}
          </div>

          <div>

            <p>ga prefix result file</p>


            <input 
              onChange={
                event => set_ga_prefix_result_file(event.target.value)}
              
               id="ga_prefix_result_file" type="text" placeholder={String(ga_prefix_result_file)} />

            {/* <a href="/" title='used in Environment_GA save_results()' >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>

          <div>

            <p>ga file vnr not created</p>
            <input 
              onChange={
                event => set_ga_file_vnr_not_created(event.target.value)}
              
               id="ga_file_vnr_not_created" type="text" placeholder={String(ga_file_vnr_not_created)} />

            {/* <a href="/" title='used in main.__main__()' >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>

          <div>
            <p>de prefix files</p>

            <input 
              onChange={
                event => set_de_prefix_files(event.target.value)}
              
               id="de_prefix_files" type="text" placeholder={String(de_prefix_files)} />

            {/* <a href="/" title="used in Environment_DE" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>

          <div>
            <p>de prefix result file</p>

            <input 
              onChange={
                event => set_de_prefix_result_file(event.target.value)}
              
               id="de_prefix_result_file" type="text" placeholder={String(de_prefix_result_file)} />

            {/* <a href="/" title="used in Environment_DE" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>

          <div>
            <p>de file vnr not created</p>
            <input 
              onChange={
                event => set_de_file_vnr_not_created(event.target.value)}
              
               id="de_file_vnr_not_created" type="text" placeholder={String(de_file_vnr_not_created)} />

            {/* <a href="/" title="used in Environment_DE" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>

          <div>
            <p>stress prefix files</p>

            <input 
              onChange={
                event => set_stress_prefix_files(event.target.value)}
              
               id="stress_prefix_files" type="text" placeholder={String(stress_prefix_files)} />

            {/* <a href="/" title="used in Environment_Stress" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>

          <div>
          <p>stress prefix result file</p>

            <input 
              onChange={
                event => set_stress_prefix_result_file(event.target.value)}
              
               id="stress_prefix_result_file" type="text" placeholder={String(stress_prefix_result_file)} />

            {/* <a href="/" title="used in Environment_Stress" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>

          <div>
            <p>stress file vnr not created</p>
            <input 
              onChange={
                event => set_stress_file_vnr_not_created(event.target.value)}
              
               id="stress_file_vnr_not_created" type="text" placeholder={String(stress_file_vnr_not_created)} />

            {/* <a href="/" title="used in Environment_Stress" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}

          </div>
          <div>


            <p>greedy prefix files</p>
            <input 
              onChange={
                event => set_greedy_prefix_files(event.target.value)}
              
               id="greedy_prefix_files" type="text" placeholder={String(greedy_prefix_files)} />

            {/* <a href="/" title="used in Environment_Greedy" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>
          <div>

            <p>greedy prefix result file</p>
            <input 
              onChange={
                event => set_greedy_prefix_result_file(event.target.value)}
              
               id="greedy_prefix_result_file" type="text" placeholder={String(greedy_prefix_result_file)} />
            {/* <a href="/" title="used in Environment_Greedy" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>

          <div>


            <p>greedy_file_vnr_not_created</p>
            <input 
              onChange={
                event => set_greedy_file_vnr_not_created(event.target.value)
              }
              
             
              id="greedy_file_vnr_not_created" 
              type="text" 
              placeholder={String(greedy_file_vnr_not_created)} />

            {/* <a href="/" title="used in Environment_Greedy" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>

          <div>
            <p>time_to_create_a_slice</p>
            <input onChange={
              event => set_time_to_create_a_slice(Number(event.target.value))
            }
              
             
              id="time_to_create_a_slice" 
              type="number" 
              placeholder={String(time_to_create_a_slice)} />
              {/* <a href="/" title="used in Domains by Domains_Generator" >
              <img src="/assets/icons/help.png" alt="icon Help" /> 
              </a> */}
          </div>

          <div>

            <p>limit_max_bandwidth</p>

            <input 
              onChange={
                event => set_limit_max_bandwidth(Number(event.target.value))}
              
               id="limit_max_bandwidth" type="number" placeholder={String(limit_max_bandwidth)} />

            {/* <a href="/" title="it must be greater than core_bandwidth" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>

          <div>

            <p>path_approach</p>
            <input 
              onChange={
                event => set_path_approach(Number(event.target.value))}
              
               id="path_approach" type="number" placeholder={String(path_approach)} />

            {/* <a href="/" title="" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>
          <div>

            <p>quantity_services</p>
            <input 
              onChange={
                event => set_quantity_services(Number(event.target.value))}
              
               id="quantity_services" type="number" placeholder={String(quantity_services)} />

            {/* <a href="/" title="used in Environment.py in create_services method" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>
          <div>

            <p>quantity_max_functions</p>


            <input 
              onChange={
                event => set_quantity_max_functions(Number(event.target.value))}
              
               id="quantity_max_functions" type="number" placeholder={String(quantity_max_functions)} />

            {/* <a href="/" title="used in Environment.py in create_services method" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>
          <div>

            <p>quantity_max_pkts</p>

            <input 
              onChange={
                event => set_quantity_max_pkts(Number(event.target.value))}
              
               id="quantity_max_pkts" type="number" placeholder={String(quantity_max_pkts)} />

            {/* <a href="/" title="a function can at must delay 100pkts/time_unit" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>
          <div>

            <p>file_services</p>
            <input 
              onChange={
                event => set_file_services(event.target.value)}
              
               id="file_services" type="text" placeholder={String(file_services)} />

            {/* <a href="/" title="" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>
          <div>

            <p>file_functions</p>
            <input 
              onChange={
                event => set_file_functions(event.target.value)}
              
               id="file_functions" type="text" placeholder={String(file_functions)} />

            {/* <a href="/" title="" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>
          <div>

            <p>MTU</p>
            <input 
              onChange={
                event => set_MTU(Number(event.target.value))}
              
               id="MTU" type="number" placeholder={String(MTU)} />

            {/* <a href="/" title="" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>
          <div>

            <p>DE_C</p>
            <input 
              onChange={
                event => set_DE_C(Number(event.target.value))}
              
               id="DE_C" type="number" placeholder={String(DE_C)} />

            {/* <a href="/" title="(0.9 valor usado nos testes) used in DE/Embedding_DE (it means the probability C see DE algorithm)" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>
          <div>

            <p>DE_F</p>
            <input 
              onChange={
                event => set_DE_F(Number(event.target.value))}
              
               id="DE_F" type="number" placeholder={String(DE_F)} />

            {/* <a href="/" title="(0.85 valor usado nos testes)  # used in DE/Embedding_DE (it means the Factor C see DE algorithm)" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}

          </div>
          <div>

            <p>link_delay_min </p>

            <input 
              onChange={
                event => set_link_delay_min(Number(event.target.value))}
              
               id="link_delay_min" type="number" placeholder={String(link_delay_min)} />

            {/* <a href="/" title="Used in Environment.py to create the links by first time" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>
          <div>

            <p>link_delay_max </p>
            <input 
              onChange={
                event => set_link_delay_max(Number(event.target.value))}
              
               id="link_delay_max" type="number" placeholder={String(link_delay_max)} />

            {/* <a href="/" title="Used in Environment.py to create the links by first time" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>
          <div>

            <p>link_relibility_min</p>
            <input 
              onChange={
                event => set_link_relibility_min(Number(event.target.value))}
              
               id="link_relibility_min" type="number" placeholder={String(link_relibility_min)} />

            {/* <a href="/" title="Used in Environment.py to create the links by first time" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
          </a> */}
          </div>
          
          <div>
            <p>link_relibility_max</p>
            <input 
              onChange={
                event => set_link_relibility_max(Number(event.target.value))}
              
               id="link_relibility_max" type="number" placeholder={String(link_relibility_max)} />

             {/* <a href="/" title="Used in Environment.py to create the links by first time" >
                <img src="/assets/icons/help.png" alt="icon Help" /> 
                a> */}
          </div>
          
          <div>
            <p>types_slice</p>
            <input 
              onChange={
                event => set_types_slice((event.target.value).split(','))
              }
              
             
              id="types_slice" 
              type="text" 
              placeholder={String(types_slice)} 
            />
            {/* <a href="/" title="" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
            </a> */}
          </div>
          
          <div>
            <p>de_coefficients </p>
            <input 
              onChange={
                event => set_de_coefficients(JSON.parse(event.target.value))
              }
             
             
              id="de_coefficients" 
              type="text" 
              placeholder={String(de_coefficients)} 
            />
            {/* <a href="/" title="" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
            </a> */}
          </div>

          <div>
            <p>hop_coefficients </p>
            <input 
              onChange={
                event => set_hop_coefficients(Number(event.target.value))}
                
               
                id="hop_coefficients" 
                type="number" 
                placeholder={String(hop_coefficients)} 
              />
            {/* <a href="/" title="0: not regard; 1 regard" >
            <img src="/assets/icons/help.png" alt="icon Help" /> 
            </a> */}
          </div>

          <div>
            <p>remove_vnr_not_mapped </p>
            <input 
              onChange={
                event => set_remove_vnr_not_mapped(
                  event.target.value
                )
              }
            
             
              id="remove_vnr_not_mapped" 
              type="text" 
              placeholder={String(remove_vnr_not_mapped)} 
            />
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

export default SetupModal