import { CytoscapeProvider } from "./CytoscapeGraph/CytoscapeContext"; 
import { RequestProvider } from "./Request/RequestContext";
export type ProviderStack = ((children: JSX.Element) => JSX.Element)[];


/**
 * A stack of providers.
 */
const providers = [
  (children) => <CytoscapeProvider>{children}</CytoscapeProvider>,
  (children) => <RequestProvider>{children}</RequestProvider>,
] as ProviderStack;

export const AppProvider = ({ children }: { children: JSX.Element }) =>
providers.reduceRight((children, mount) => mount(children), children);

