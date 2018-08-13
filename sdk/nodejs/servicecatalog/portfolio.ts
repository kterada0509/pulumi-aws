// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

import {Tags} from "../index";

/**
 * Provides a resource to create a Service Catalog Portfolio.
 */
export class Portfolio extends pulumi.CustomResource {
    /**
     * Get an existing Portfolio resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PortfolioState): Portfolio {
        return new Portfolio(name, <any>state, { id });
    }

    public /*out*/ readonly arn: pulumi.Output<string>;
    public /*out*/ readonly createdTime: pulumi.Output<string>;
    /**
     * Description of the portfolio
     */
    public readonly description: pulumi.Output<string>;
    /**
     * The name of the portfolio.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * Name of the person or organization who owns the portfolio.
     */
    public readonly providerName: pulumi.Output<string | undefined>;
    /**
     * Tags to apply to the connection.
     */
    public readonly tags: pulumi.Output<Tags | undefined>;

    /**
     * Create a Portfolio resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: PortfolioArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PortfolioArgs | PortfolioState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: PortfolioState = argsOrState as PortfolioState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["createdTime"] = state ? state.createdTime : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["providerName"] = state ? state.providerName : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as PortfolioArgs | undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["providerName"] = args ? args.providerName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["createdTime"] = undefined /*out*/;
        }
        super("aws:servicecatalog/portfolio:Portfolio", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Portfolio resources.
 */
export interface PortfolioState {
    readonly arn?: pulumi.Input<string>;
    readonly createdTime?: pulumi.Input<string>;
    /**
     * Description of the portfolio
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The name of the portfolio.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Name of the person or organization who owns the portfolio.
     */
    readonly providerName?: pulumi.Input<string>;
    /**
     * Tags to apply to the connection.
     */
    readonly tags?: pulumi.Input<Tags>;
}

/**
 * The set of arguments for constructing a Portfolio resource.
 */
export interface PortfolioArgs {
    /**
     * Description of the portfolio
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The name of the portfolio.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Name of the person or organization who owns the portfolio.
     */
    readonly providerName?: pulumi.Input<string>;
    /**
     * Tags to apply to the connection.
     */
    readonly tags?: pulumi.Input<Tags>;
}
