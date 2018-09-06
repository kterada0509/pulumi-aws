// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a WAF IPSet Resource
 */
export class IpSet extends pulumi.CustomResource {
    /**
     * Get an existing IpSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpSetState): IpSet {
        return new IpSet(name, <any>state, { id });
    }

    /**
     * The ARN of the WAF IPSet.
     */
    public /*out*/ readonly arn: pulumi.Output<string>;
    /**
     * One or more pairs specifying the IP address type (IPV4 or IPV6) and the IP address range (in CIDR format) from which web requests originate.
     */
    public readonly ipSetDescriptors: pulumi.Output<{ type: string, value: string }[] | undefined>;
    /**
     * The name or description of the IPSet.
     */
    public readonly name: pulumi.Output<string>;

    /**
     * Create a IpSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IpSetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IpSetArgs | IpSetState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: IpSetState = argsOrState as IpSetState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["ipSetDescriptors"] = state ? state.ipSetDescriptors : undefined;
            inputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as IpSetArgs | undefined;
            inputs["ipSetDescriptors"] = args ? args.ipSetDescriptors : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["arn"] = undefined /*out*/;
        }
        super("aws:waf/ipSet:IpSet", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering IpSet resources.
 */
export interface IpSetState {
    /**
     * The ARN of the WAF IPSet.
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * One or more pairs specifying the IP address type (IPV4 or IPV6) and the IP address range (in CIDR format) from which web requests originate.
     */
    readonly ipSetDescriptors?: pulumi.Input<pulumi.Input<{ type: pulumi.Input<string>, value: pulumi.Input<string> }>[]>;
    /**
     * The name or description of the IPSet.
     */
    readonly name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IpSet resource.
 */
export interface IpSetArgs {
    /**
     * One or more pairs specifying the IP address type (IPV4 or IPV6) and the IP address range (in CIDR format) from which web requests originate.
     */
    readonly ipSetDescriptors?: pulumi.Input<pulumi.Input<{ type: pulumi.Input<string>, value: pulumi.Input<string> }>[]>;
    /**
     * The name or description of the IPSet.
     */
    readonly name?: pulumi.Input<string>;
}
