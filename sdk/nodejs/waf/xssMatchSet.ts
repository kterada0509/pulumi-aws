// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a WAF XSS Match Set Resource
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const xssMatchSet = new aws.waf.XssMatchSet("xss_match_set", {
 *     xssMatchTuples: [
 *         {
 *             fieldToMatch: {
 *                 type: "URI",
 *             },
 *             textTransformation: "NONE",
 *         },
 *         {
 *             fieldToMatch: {
 *                 type: "QUERY_STRING",
 *             },
 *             textTransformation: "NONE",
 *         },
 *     ],
 * });
 * ```
 */
export class XssMatchSet extends pulumi.CustomResource {
    /**
     * Get an existing XssMatchSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: XssMatchSetState, opts?: pulumi.CustomResourceOptions): XssMatchSet {
        return new XssMatchSet(name, <any>state, { ...opts, id: id });
    }

    /**
     * The name or description of the SizeConstraintSet.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * The parts of web requests that you want to inspect for cross-site scripting attacks.
     */
    public readonly xssMatchTuples: pulumi.Output<{ fieldToMatch: { data?: string, type: string }, textTransformation: string }[] | undefined>;

    /**
     * Create a XssMatchSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: XssMatchSetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: XssMatchSetArgs | XssMatchSetState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: XssMatchSetState = argsOrState as XssMatchSetState | undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["xssMatchTuples"] = state ? state.xssMatchTuples : undefined;
        } else {
            const args = argsOrState as XssMatchSetArgs | undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["xssMatchTuples"] = args ? args.xssMatchTuples : undefined;
        }
        super("aws:waf/xssMatchSet:XssMatchSet", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering XssMatchSet resources.
 */
export interface XssMatchSetState {
    /**
     * The name or description of the SizeConstraintSet.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The parts of web requests that you want to inspect for cross-site scripting attacks.
     */
    readonly xssMatchTuples?: pulumi.Input<pulumi.Input<{ fieldToMatch: pulumi.Input<{ data?: pulumi.Input<string>, type: pulumi.Input<string> }>, textTransformation: pulumi.Input<string> }>[]>;
}

/**
 * The set of arguments for constructing a XssMatchSet resource.
 */
export interface XssMatchSetArgs {
    /**
     * The name or description of the SizeConstraintSet.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The parts of web requests that you want to inspect for cross-site scripting attacks.
     */
    readonly xssMatchTuples?: pulumi.Input<pulumi.Input<{ fieldToMatch: pulumi.Input<{ data?: pulumi.Input<string>, type: pulumi.Input<string> }>, textTransformation: pulumi.Input<string> }>[]>;
}

/**
 * The live XssMatchSet resource.
 */
export interface XssMatchSetResult {
    /**
     * The name or description of the SizeConstraintSet.
     */
    readonly name: string;
    /**
     * The parts of web requests that you want to inspect for cross-site scripting attacks.
     */
    readonly xssMatchTuples?: { fieldToMatch: { data?: string, type: string }, textTransformation: string }[];
}
