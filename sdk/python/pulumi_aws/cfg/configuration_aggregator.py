# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities

class ConfigurationAggregator(pulumi.CustomResource):
    """
    Manages an AWS Config Configuration Aggregator
    """
    def __init__(__self__, __name__, __opts__=None, account_aggregation_source=None, name=None, organization_aggregation_source=None):
        """Create a ConfigurationAggregator resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if account_aggregation_source and not isinstance(account_aggregation_source, dict):
            raise TypeError('Expected property account_aggregation_source to be a dict')
        __self__.account_aggregation_source = account_aggregation_source
        """
        The account(s) to aggregate config data from as documented below.
        """
        __props__['accountAggregationSource'] = account_aggregation_source

        if name and not isinstance(name, basestring):
            raise TypeError('Expected property name to be a basestring')
        __self__.name = name
        """
        The name of the configuration aggregator.
        """
        __props__['name'] = name

        if organization_aggregation_source and not isinstance(organization_aggregation_source, dict):
            raise TypeError('Expected property organization_aggregation_source to be a dict')
        __self__.organization_aggregation_source = organization_aggregation_source
        """
        The organization to aggregate config data from as documented below.
        """
        __props__['organizationAggregationSource'] = organization_aggregation_source

        __self__.arn = pulumi.runtime.UNKNOWN
        """
        The ARN of the aggregator
        """

        super(ConfigurationAggregator, __self__).__init__(
            'aws:cfg/configurationAggregator:ConfigurationAggregator',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'accountAggregationSource' in outs:
            self.account_aggregation_source = outs['accountAggregationSource']
        if 'arn' in outs:
            self.arn = outs['arn']
        if 'name' in outs:
            self.name = outs['name']
        if 'organizationAggregationSource' in outs:
            self.organization_aggregation_source = outs['organizationAggregationSource']
