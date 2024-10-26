# Creating a Parameter File for the Stone Prover

The Stone prover is designed to facilitate the generation of proofs in a streamlined manner. To effectively utilize this prover, it is essential to create a parameter file that is tailored to the specific requirements of your program. This documentation will guide you through the process of creating such a file, detailing its format and necessary components.

## Parameter File Format

The parameter file for the Stone prover is typically formatted in JSON. Below are the key components that should be included in your parameter file:

- **General Configuration**
  - **last_layer_degree_bound**: Specifies the maximum degree bound for the last layer.
  - **fri_step_list**: A list of integers representing the steps in the Fast Reed-Solomon Interactive Oracle Proofs (FRI) protocol.
  
- **Trace Configuration**
  - **trace_rows_per_step**: Number of trace rows generated per step, which affects the size of the trace.

- **Input Sizes**
  - Adjustments to input sizes should be reflected in the parameters to ensure compatibility with the program being proved.

## Example Parameter File

Here’s an example of what a parameter file might look like:

```json
{
  "last_layer_degree_bound": 8,
  "fri_step_list": [2, 3],
  "trace_rows_per_step": 16
}
