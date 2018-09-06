# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities

class SubnetGroup(pulumi.CustomResource):
    """
    Creates a new Amazon Redshift subnet group. You must provide a list of one or more subnets in your existing Amazon Virtual Private Cloud (Amazon VPC) when creating Amazon Redshift subnet group.
    """
    def __init__(__self__, __name__, __opts__=None, description=None, name=None, subnet_ids=None, tags=None):
        """Create a SubnetGroup resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        description = 'Managed by Pulumi'
        if description and not isinstance(description, basestring):
            raise TypeError('Expected property description to be a basestring')
        __self__.description = description
        """
        The description of the Redshift Subnet group. Defaults to "Managed by Terraform".
        """
        __props__['description'] = description

        if name and not isinstance(name, basestring):
            raise TypeError('Expected property name to be a basestring')
        __self__.name = name
        """
        The name of the Redshift Subnet group.
        """
        __props__['name'] = name

        if not subnet_ids:
            raise TypeError('Missing required property subnet_ids')
        elif not isinstance(subnet_ids, list):
            raise TypeError('Expected property subnet_ids to be a list')
        __self__.subnet_ids = subnet_ids
        """
        An array of VPC subnet IDs.
        """
        __props__['subnetIds'] = subnet_ids

        if tags and not isinstance(tags, dict):
            raise TypeError('Expected property tags to be a dict')
        __self__.tags = tags
        """
        A mapping of tags to assign to the resource.
        """
        __props__['tags'] = tags

        super(SubnetGroup, __self__).__init__(
            'aws:redshift/subnetGroup:SubnetGroup',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'description' in outs:
            self.description = outs['description']
        if 'name' in outs:
            self.name = outs['name']
        if 'subnetIds' in outs:
            self.subnet_ids = outs['subnetIds']
        if 'tags' in outs:
            self.tags = outs['tags']
