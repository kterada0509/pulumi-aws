# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities, tables

class GetRepositoryResult(object):
    """
    A collection of values returned by getRepository.
    """
    def __init__(__self__, arn=None, registry_id=None, repository_url=None, tags=None, id=None):
        if arn and not isinstance(arn, str):
            raise TypeError('Expected argument arn to be a str')
        __self__.arn = arn
        """
        Full ARN of the repository.
        """
        if registry_id and not isinstance(registry_id, str):
            raise TypeError('Expected argument registry_id to be a str')
        __self__.registry_id = registry_id
        """
        The registry ID where the repository was created.
        """
        if repository_url and not isinstance(repository_url, str):
            raise TypeError('Expected argument repository_url to be a str')
        __self__.repository_url = repository_url
        """
        The URL of the repository (in the form `aws_account_id.dkr.ecr.region.amazonaws.com/repositoryName`).
        """
        if tags and not isinstance(tags, dict):
            raise TypeError('Expected argument tags to be a dict')
        __self__.tags = tags
        """
        A mapping of tags assigned to the resource.
        """
        if id and not isinstance(id, str):
            raise TypeError('Expected argument id to be a str')
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_repository(name=None, tags=None):
    """
    The ECR Repository data source allows the ARN, Repository URI and Registry ID to be retrieved for an ECR repository.
    """
    __args__ = dict()

    __args__['name'] = name
    __args__['tags'] = tags
    __ret__ = await pulumi.runtime.invoke('aws:ecr/getRepository:getRepository', __args__)

    return GetRepositoryResult(
        arn=__ret__.get('arn'),
        registry_id=__ret__.get('registryId'),
        repository_url=__ret__.get('repositoryUrl'),
        tags=__ret__.get('tags'),
        id=__ret__.get('id'))
